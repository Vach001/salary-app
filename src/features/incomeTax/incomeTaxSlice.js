import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { useSelector } from "react-redux";
import { selectSalaryInput } from "../salaryInput/salaryInputSlice";
console.log(initialState)
const initialIncomeTax = {
    incomeTax: 0
}
export const incomeTaxSlice = createSlice({
    name: "incomeTax",
    initialState: initialIncomeTax,

    reducers: {
        incomeTax: (state = {}, action = {}) => {

            let salary = Number(initialState.incomeTax)
            console.log(salary)
            state.incomeTax = state.salaryType === "GROSS" ? (salary * 0.02) : (salary * 0.01)
            return {
                ...state,

                incomeTax: state.incomeTax

            }
            return state;
        }
    }
})


export const { incomeTax } = incomeTaxSlice.actions

export const selectSalaryIncomeTax = (state) => state.incomeTax.incomeTax

export default incomeTaxSlice.reducer
