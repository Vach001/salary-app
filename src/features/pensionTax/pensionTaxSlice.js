import { createSlice } from "@reduxjs/toolkit";

const initialPensionTax = {
    pensionTax: 0
}
export const pensionTaxSlice = createSlice({
    name: "pensionTax",
    initialState: initialPensionTax,

    reducers: {
        pensionTax: (state = {}, action = {}) => {
            return {
                ...state,
                pensionTax: action.payload.pensionTax
            }
            return state;
        }
    }
})

export const { pensionTax } = pensionTaxSlice.actions

export const selectSalaryPensionTax = (state) => state.pensionTax.pensionTax

export default pensionTaxSlice.reducer
