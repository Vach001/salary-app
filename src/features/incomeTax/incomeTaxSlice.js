import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { useSelector } from "react-redux";
import { selectSalaryInput } from "../salaryInput/salaryInputSlice";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";

const initialIncomeTax = {
    incomeTax: 0
}
export const incomeTaxSlice = createSlice({
    name: "incomeTax",
    initialState: initialIncomeTax,

    reducers: {
        incomeTax: (state = {}, action = {}) => {
            state.incomeTax = initialState.incomeTax
            console.log(initialState)
            return {
                ...state,
                incomeTax: initialState.incomeTax
            }
            return state;
        }
    }
})


export const { incomeTax } = incomeTaxSlice.actions

export const selectSalaryIncomeTax = (state) => state.incomeTax.incomeTax

export default incomeTaxSlice.reducer
