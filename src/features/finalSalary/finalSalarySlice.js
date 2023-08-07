import { createSlice } from "@reduxjs/toolkit";

const initialFinalSalary = {
    finalSalary: 0
}
export const finalSalarySlice = createSlice({
    name: "finalSalary",
    initialState: initialFinalSalary,

    reducers: {
        finalSalary: (state = {}, action = {}) => {
            return {
                ...state,
                finalSalary: action.payload.finalSalary
            }
            return state;
        }
    }
})

export const { finalSalary } = finalSalarySlice.actions

export const selectFinalSalary = (state) => state.finalSalary.finalSalary

export default finalSalarySlice.reducer
