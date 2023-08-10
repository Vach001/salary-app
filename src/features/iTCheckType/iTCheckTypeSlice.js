import { createSlice } from "@reduxjs/toolkit"
import { iTAction } from "../../constants/iTAction.constants";

const initialITCheckButtons = {
    iTCheckType: iTAction.UNCERTIFIED,
}

export const iTCheckTypeSlice = createSlice({
    name: "iTCheckType",
    initialState: initialITCheckButtons,

    reducers: {
        certified: (state = {}, action = {}) => {
            state.iTCheckType = iTAction.CERTIFIED;
        },

        uncertified: (state = {}, action = {}) => {
            state.iTCheckType = iTAction.UNCERTIFIED; 
        },
    }
});

export const { certified, uncertified } = iTCheckTypeSlice.actions;

export const selectITCheckButton = (state) => state.iTCheckType.iTCheckType;

export default iTCheckTypeSlice.reducer;