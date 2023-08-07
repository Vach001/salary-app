import { createSlice } from "@reduxjs/toolkit"

const initialSalaryButtons = {
    salaryType: "GROSS",
    
}

export const salaryButtonsSlice = createSlice({
    name: 'salaryType',
    initialState: initialSalaryButtons,

    reducers: {
        grossSalary: (state = {}) => {
            state.salaryType = "GROSS";
        },

        netSalary: (state = {}) => {
            state.salaryType = "NET";
        },
        
    }

});

export const { grossSalary, netSalary } = salaryButtonsSlice.actions;

export const selectSalaryButtons = (state) => state.salaryType.salaryType;

export default salaryButtonsSlice.reducer;