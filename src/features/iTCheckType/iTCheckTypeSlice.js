import { createSlice } from "@reduxjs/toolkit"

const initialITCheckButtons = {
    iTCheckType: "UNCERTIFIED",
    
}

export const iTCheckTypeSlice = createSlice({
    name: 'iTCheckType',
    initialState: initialITCheckButtons,

    reducers: {
        certified: (state = {}) => {
            state.iTCheckType = "CERTIFIED";
        },

        uncertified: (state = {}) => {
            state.iTCheckType = "UNCERTIFIED";
        },
        
    }

});

export const { certified, uncertified } = iTCheckTypeSlice.actions;

export const selectITCheckButton = (state) => state.salaryType.salaryType;

export default iTCheckTypeSlice.reducer;