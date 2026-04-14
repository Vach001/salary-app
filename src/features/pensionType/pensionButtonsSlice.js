import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pensionType: "VOLUNTARY",
};

export const pensionButtonsSlice = createSlice({
    name: "pensionType",
    initialState,
    reducers: {
        setPensionType: (state, action) => {
            state.pensionType = action.payload;
        },
    },
});

export const { setPensionType } = pensionButtonsSlice.actions;
export const selectPensionButton = (state) => state.pensionType?.pensionType;
export default pensionButtonsSlice.reducer;