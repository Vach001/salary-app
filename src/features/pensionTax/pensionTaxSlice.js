import { createSlice } from "@reduxjs/toolkit";

const calculatePensionTaxValue = (salary, pensionType) => {
    if (pensionType === "UNPAID") return 0;
    if (pensionType === "VOLUNTARY") {
        return Math.min(Math.round(salary * 0.05), 56250);
    }
    if (pensionType === "COMPULSORY") {
        if (salary <= 500000) return Math.round(salary * 0.05);
        if (salary <= 1125000) return Math.round(salary * 0.1 - 25000);
        return 87500;
    }
    return 0;
};

const pensionTaxSlice = createSlice({
    name: "pensionTax",
    initialState: { pensionTax: 0 },
    reducers: {
        setPensionTax: (state, action) => {
            state.pensionTax = action.payload;
        }
    }
});

export const { setPensionTax } = pensionTaxSlice.actions;

export const pensionTax = () => (dispatch, getState) => {
    const state = getState();
    const salary = state.salaryInput?.salary || 0;
    const pensionType = state.pensionType?.pensionType || "UNPAID";
    dispatch(setPensionTax(calculatePensionTaxValue(salary, pensionType)));
};

export const selectSalaryPensionTax = (state) => state.pensionTax?.pensionTax || 0;
export default pensionTaxSlice.reducer;