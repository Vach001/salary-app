import { createSlice } from "@reduxjs/toolkit"

const initialPensionButtons = {
    pensionType: "VOLUNTARY",
    
}

export const pensionButtonsSlice = createSlice({
    name: 'pensionType',
    initialState: initialPensionButtons,

    reducers: {
        voluntary: (state = {}) => {
            state.pensionType = "VOLUNTARY";
        },

        compulsory: (state = {}) => {
            state.pensionType = "COMPULSORY";
        },
        unpaid: (state = {}) => {
            state.pensionType = "UNPAID";
        },
        
    }

});

export const { voluntary, compulsory, unpaid } = pensionButtonsSlice.actions;

export const selectPensionButton = (state) => state.pensionType.pensionType;

export default pensionButtonsSlice.reducer;