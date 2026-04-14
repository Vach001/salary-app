import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iTCheckType: "UNCERTIFIED",
};

export const iTCheckTypeSlice = createSlice({
    name: "iTCheckType",
    initialState,
    reducers: {
        setITCheckType: (state, action) => {
            state.iTCheckType = action.payload;
        },
    },
});

export const { setITCheckType } = iTCheckTypeSlice.actions;
export const selectITCheckButton = (state) => state.iTCheckType?.iTCheckType;
export default iTCheckTypeSlice.reducer;