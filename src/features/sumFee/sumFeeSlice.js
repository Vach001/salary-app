import { createSlice } from "@reduxjs/toolkit";

const initialSumFee = {
    sumFee: 0
}
export const sumFeeSlice = createSlice({
    name: "sumFee",
    initialState: initialSumFee,

    reducers: {
        sumFee: (state = {}, action = {}) => {
            return {
                ...state,
                sumFee: action.payload.sumFee
            }
            return state;
        }
    }
})

export const { sumFee } = sumFeeSlice.actions

export const selectSalarySumFee = (state) => state.sumFee.sumFee

export default sumFeeSlice.reducer
