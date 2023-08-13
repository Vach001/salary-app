import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { useDispatch, useSelector } from "react-redux";
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
        income: (state = {}, action = {}) => {
            state.incomeTax = initialState.incomeTax
            console.log(initialState)
            return {
                ...state,
                incomeTax: state.incomeTax 
            }
            return state;
        }
    }
})


export const { income } = incomeTaxSlice.actions

export const selectSalaryIncomeTax = (state) => state.incomeTax.incomeTax

export default incomeTaxSlice.reducer
