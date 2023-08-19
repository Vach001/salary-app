import { createSlice } from "@reduxjs/toolkit"
import { iTAction } from "../../constants/iTAction.constants";
import selectedTypes from "../../helpers/selectedTypes";

const initialITCheckButtons = {
    iTCheckType: iTAction.UNCERTIFIED,
}

export const iTCheckTypeSlice = createSlice({
    name: "iTCheckType",
    initialState: initialITCheckButtons,

    reducers: {
        certified: (state = {}, action = {}) => {
            state.iTCheckType = iTAction.CERTIFIED;
            selectedTypes.iTCheckType = state.iTCheckType
        },

        uncertified: (state = {}, action = {}) => {
            state.iTCheckType = iTAction.UNCERTIFIED; 
            selectedTypes.iTCheckType = state.iTCheckType
        },
    }
});

export const { certified, uncertified } = iTCheckTypeSlice.actions;

export const selectITCheckButton = (state) => state.iTCheckType.iTCheckType;

export default iTCheckTypeSlice.reducer;