import { createSlice } from "@reduxjs/toolkit";

const initialIncomeTax = {
    incomeTax: 0
}
export const incomeTaxSlice = createSlice({
    name: "incomeTax",
    initialState: initialIncomeTax,

    reducers: {
        incomeTax: (state = {}, action = {}) => {
            return {
                ...state,
                incomeTax: action.payload.incomeTax
            }
            return state;
        }
    }
})

export const { incomeTax } = incomeTaxSlice.actions

export const selectSalaryIncomeTax = (state) => state.incomeTax.incomeTax

export default incomeTaxSlice.reducer
