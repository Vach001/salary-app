import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";

const initialIncomeTax = {
    incomeTax: 0
}
export const incomeTaxSlice = createSlice({
    name: "incomeTax",
    initialState: initialIncomeTax,

    reducers: {
        incomeTax: (state = {}, action = {}) => {
            state.incomeTax = initialState.incomeTax
        }
    }
})

export const { incomeTax } = incomeTaxSlice.actions

export const selectSalaryIncomeTax = (state) => state.incomeTax.incomeTax

export default incomeTaxSlice.reducer
