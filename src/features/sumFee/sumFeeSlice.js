import { createSlice } from "@reduxjs/toolkit";

const sumFeeSlice = createSlice({
    name: "sumFee",
    initialState: { sumFee: 0 },
    reducers: {
        setSumFee: (state, action) => {
            state.sumFee = action.payload;
        },
    },
});

export const { setSumFee } = sumFeeSlice.actions;

export const sumFee = () => (dispatch, getState) => {
    const state = getState();
    const incomeTaxValue = state.incomeTax?.incomeTax || 0;
    const pensionTaxValue = state.pensionTax?.pensionTax || 0;
    const stampFeeValue = state.stampFee?.stampFee || 0;
    const healthInsuranceValue = state.healthInsurance?.healthInsurance || 0;
    
    const total = incomeTaxValue + pensionTaxValue + stampFeeValue + healthInsuranceValue;
    dispatch(setSumFee(total));
};

export const selectSalarySumFee = (state) => state.sumFee?.sumFee || 0;
export default sumFeeSlice.reducer;