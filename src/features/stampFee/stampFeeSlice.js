import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../constants/initialState.constants";

const initialStampFee = {
    stampFee: 0
}
export const stampFeeSlice = createSlice({
    name: "stampFee",
    initialState: initialStampFee,

    reducers: {
        stampFee: (state = {}, action = {}) => {
            state.stampFee = initialState.stampFee
        }
    }
})

export const { stampFee } = stampFeeSlice.actions

export const selectSalaryStampFee = (state) => state.stampFee.stampFee

export default stampFeeSlice.reducer
