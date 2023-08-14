import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";

const initialSumFee = {
    sumFee: 0
}
export const sumFeeSlice = createSlice({
    name: "sumFee",
    initialState: initialSumFee,

    reducers: {
        sumFee: (state = {}, action = {}) => {
            state.sumFee = initialState.sumFee
        }
    }
})

export const { sumFee } = sumFeeSlice.actions

export const selectSalarySumFee = (state) => state.sumFee.sumFee

export default sumFeeSlice.reducer
