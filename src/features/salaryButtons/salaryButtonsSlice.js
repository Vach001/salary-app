import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salaryType: "GROSS",
};

export const salaryButtonsSlice = createSlice({
    name: "salaryType",
    initialState,
    reducers: {
        setSalaryType: (state, action) => {
            state.salaryType = action.payload;
        },
    },
});

export const { setSalaryType } = salaryButtonsSlice.actions;
export const selectSalaryButtons = (state) => state.salaryType?.salaryType;
export default salaryButtonsSlice.reducer;