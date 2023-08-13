import { createSlice } from "@reduxjs/toolkit"
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary"
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT"
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT"
import IncomeTax from "../../Components/IncomeTax/IncomeTax"
import { initialState } from "../../constants/initialState.constants"
import incomeTaxSlice from "../incomeTax/incomeTaxSlice"


const initialInput = {
    salary: ""
}

export const salaryInputSlice = createSlice({
    name: "salaryInput",
    initialState: initialInput,

    reducers: {
        inputSalary: (state = {}, action = {}) => {
            state.salary = action.payload
        }
    }
})
    
export const { inputSalary } = salaryInputSlice.actions

export const selectSalaryInput = (state) => state.salaryInput.salary;

export default salaryInputSlice.reducer

