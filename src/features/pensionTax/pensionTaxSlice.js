import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";

const initialPensionTax = {
    pensionTax: 0
}
export const pensionTaxSlice = createSlice({
    name: "pensionTax",
    initialState: initialPensionTax,

    reducers: {
        pensionTax: (state = {}, action = {}) => {
            state.pensionTax = initialState.pension
        }
    }
})

export const { pensionTax } = pensionTaxSlice.actions

export const selectSalaryPensionTax = (state) => state.pensionTax.pensionTax

export default pensionTaxSlice.reducer
