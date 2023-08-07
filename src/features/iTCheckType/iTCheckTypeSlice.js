import { createSlice } from "@reduxjs/toolkit"
import { iTAction } from "../../constants/iTAction.constants";

const initialITCheckButtons = {
    iTCheckType: iTAction.UNCERTIFIED,
    
}

export const iTCheckTypeSlice = createSlice({
    name: 'iTCheckType',
    initialState: initialITCheckButtons,

    reducers: {
        certified: (state = {}) => {
            state.iTCheckType = iTAction.CERTIFIED;
        },

        uncertified: (state = {}) => {
            state.iTCheckType = iTAction.UNCERTIFIED;
        },
        
    }

});

export const { certified, uncertified } = iTCheckTypeSlice.actions;

export const selectITCheckButton = (state) => state.salaryType.salaryType;

export default iTCheckTypeSlice.reducer;