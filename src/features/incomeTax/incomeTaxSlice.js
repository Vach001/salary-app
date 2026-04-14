import { createSlice } from "@reduxjs/toolkit";

const calculateIncomeTaxValue = (salary, isIT) => {
    const rate = isIT ? 0.10 : 0.20;
    return Math.round(salary * rate);
};

const incomeTaxSlice = createSlice({
    name: "incomeTax",
    initialState: { incomeTax: 0 },
    reducers: {
        setIncomeTax: (state, action) => {
            state.incomeTax = action.payload;
        }
    }
});

export const { setIncomeTax } = incomeTaxSlice.actions;

export const incomeTax = () => (dispatch, getState) => {
    const state = getState();
    const salary = state.salaryInput?.salary || 0;
    const isIT = state.iTCheckType?.iTCheckType === "CERTIFIED";
    dispatch(setIncomeTax(calculateIncomeTaxValue(salary, isIT)));
};

export const selectSalaryIncomeTax = (state) => state.incomeTax?.incomeTax || 0;
export default incomeTaxSlice.reducer;