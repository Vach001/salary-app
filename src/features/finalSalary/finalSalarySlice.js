import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";

const initialFinalSalary = {
    finalSalary: 0
}
export const finalSalarySlice = createSlice({
    name: "finalSalary",
    initialState: initialFinalSalary,

    reducers: {
        finalSalary: (state = {}, action = {}) => {
            state.finalSalary= initialState.finalSalary
        }
    }
})

export const { finalSalary } = finalSalarySlice.actions

export const selectFinalSalary = (state) => state.finalSalary.finalSalary

export default finalSalarySlice.reducer
