import { createSlice } from "@reduxjs/toolkit"
import { salaryAction } from "../../constants/salaryAction.constants";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT"
import selectedTypes from "../../helpers/selectedTypes";

const initialSalaryButtons = {
    salaryType: salaryAction.GROSS,
}

export const salaryButtonsSlice = createSlice({
    name: 'salaryType',
    initialState: initialSalaryButtons,

    reducers: {
        grossSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.GROSS;
            selectedTypes.salaryType =  state.salaryType;
            calculateGrossSalary()
        },

        netSalary: (state = {}, action = {}) => {
            state.salaryType = salaryAction.NET;
            selectedTypes.salaryType = state.salaryType;
            calculateNetSalaryDisIT()
            calculateNetSalaryWithIT()
        },
        
    }

});

export const { grossSalary, netSalary } = salaryButtonsSlice.actions;

export const selectSalaryButtons = (state) => state.salaryType.salaryType;

export default salaryButtonsSlice.reducer;