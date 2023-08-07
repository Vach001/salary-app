import { createSlice } from "@reduxjs/toolkit";

const initialStampFee = {
    stampFee: 0
}
export const stampFeeSlice = createSlice({
    name: "stampFee",
    initialState: initialStampFee,

    reducers: {
        stampFee: (state = {}, action = {}) => {
            return {
                ...state,
                stampFee: action.payload.stampFee
            }
            return state;
        }
    }
})

export const { stampFee } = stampFeeSlice.actions

export const selectSalaryStampFee = (state) => state.stampFee.stampFee

export default stampFeeSlice.reducer
