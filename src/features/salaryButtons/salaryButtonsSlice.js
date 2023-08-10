import { createSlice } from "@reduxjs/toolkit"
import { salaryAction } from "../../constants/salaryAction.constants";

const initialSalaryButtons = {
    salaryType: salaryAction.GROSS,
}

export const salaryButtonsSlice = createSlice({
    name: 'salaryType',
    initialState: initialSalaryButtons,

    reducers: {
        grossSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.GROSS;
        },

        netSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.NET;
        },
        
    }

});

export const { grossSalary, netSalary } = salaryButtonsSlice.actions;

export const selectSalaryButtons = (state) => state.salaryType.salaryType;

export default salaryButtonsSlice.reducer;