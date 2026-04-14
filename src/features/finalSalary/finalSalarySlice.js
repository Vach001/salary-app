import { createSlice } from "@reduxjs/toolkit";

const finalSalarySlice = createSlice({
    name: "finalSalary",
    initialState: { finalSalary: 0 },
    reducers: {
        setFinalSalary: (state, action) => {
            state.finalSalary = action.payload;
        },
    },
});

export const { setFinalSalary } = finalSalarySlice.actions;

export const finalSalary = () => (dispatch, getState) => {
    const state = getState();
    const grossSalary = state.salaryInput?.salary || 0;
    const totalFees = state.sumFee?.sumFee || 0;
    
    dispatch(setFinalSalary(grossSalary - totalFees));
};

export const selectFinalSalary = (state) => state.finalSalary?.finalSalary || 0;
export default finalSalarySlice.reducer;