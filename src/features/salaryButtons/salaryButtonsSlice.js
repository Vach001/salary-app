import { createSlice } from "@reduxjs/toolkit"
import { salaryAction } from "../../constants/salaryAction.constants";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT"

const initialSalaryButtons = {
    salaryType: salaryAction.GROSS,
}

export const salaryButtonsSlice = createSlice({
    name: 'salaryType',
    initialState: initialSalaryButtons,

    reducers: {
        grossSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.GROSS;
            calculateGrossSalary()
        },

        netSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.NET;
            calculateNetSalaryDisIT()
            calculateNetSalaryWithIT()
        },
        
    }

});

export const { grossSalary, netSalary } = salaryButtonsSlice.actions;

export const selectSalaryButtons = (state) => state.salaryType.salaryType;

export default salaryButtonsSlice.reducer;