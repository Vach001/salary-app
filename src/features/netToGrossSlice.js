import { createSlice } from "@reduxjs/toolkit";
import { calculateGrossFromNet } from "../helpers/netToGross";

const initialState = {
    grossSalary: 0,
};

const netToGrossSlice = createSlice({
    name: "netToGross",
    initialState,
    reducers: {
        setGrossSalary: (state, action) => {
            state.grossSalary = action.payload;
        },
    },
});

export const { setGrossSalary } = netToGrossSlice.actions;

export const netToGross = () => (dispatch, getState) => {
    const state = getState();
    const netSalary = state.salaryInput?.salary || 0;
    const itCheckType = state.iTCheckType?.iTCheckType || "UNCERTIFIED";
    const pensionType = state.pensionType?.pensionType || "VOLUNTARY";
    const year = state.year?.year || new Date().getFullYear();
    const isHealthMember = state.healthInsurance?.isMember || false;
    
    if (netSalary <= 0) return;
    
    const isIT = itCheckType === "CERTIFIED";
    const grossSalary = calculateGrossFromNet(netSalary, isIT, pensionType, year, isHealthMember);
    
    dispatch(setGrossSalary(grossSalary));
    
    // Եկամտային հարկ 
    const incomeTaxValue = Math.round(isIT ? grossSalary * 0.1 : grossSalary * 0.2);
    dispatch({ type: "incomeTax/setIncomeTax", payload: incomeTaxValue });
    
    // Սոցվճար
    let pensionValue = 0;
    if (pensionType === "VOLUNTARY") {
        pensionValue = Math.min(Math.round(grossSalary * 0.05), 56250);
    } else if (pensionType === "COMPULSORY") {
        if (grossSalary <= 500000) pensionValue = Math.round(grossSalary * 0.05);
        else if (grossSalary <= 1125000) pensionValue = Math.round(grossSalary * 0.1 - 25000);
        else pensionValue = 87500;
    }
    dispatch({ type: "pensionTax/setPensionTax", payload: pensionValue });
    
    // Դրոշմանիշային վճար
    const stampFeeValue = year >= 2026 
        ? (grossSalary <= 1000000 ? 1000 : 15000)
        : (grossSalary < 2000 ? 0 : grossSalary < 100001 ? 1500 : grossSalary < 200001 ? 3000 : grossSalary < 500001 ? 5500 : grossSalary < 1000001 ? 8500 : 15000);
    dispatch({ type: "stampFee/setStampFee", payload: stampFeeValue });
    
    // Առողջապահություն 
    let healthValue = 0;
    if (year >= 2026 && isHealthMember) {
        healthValue = grossSalary <= 500000 ? 4800 : 10800;
    }
    dispatch({ type: "SET_HEALTH_INSURANCE", payload: healthValue });
    
    // Ընդամենը հարկեր
    const totalFees = incomeTaxValue + pensionValue + stampFeeValue + healthValue;
    dispatch({ type: "sumFee/setSumFee", payload: totalFees });
    
    // Final Salary (Gross-ը NET ռեժիմում)
    dispatch({ type: "finalSalary/setFinalSalary", payload: grossSalary });
};

export default netToGrossSlice.reducer;