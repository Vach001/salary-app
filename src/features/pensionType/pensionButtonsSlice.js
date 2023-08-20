import { createSlice } from "@reduxjs/toolkit"
import { pensionAction } from "../../constants/pensionAction.constants"
import selectedTypes from "../../helpers/selectedTypes";

const initialPensionButtons = {
    pensionType: pensionAction.VOLUNTARY,
}

export const pensionButtonsSlice = createSlice({
    name: 'pensionType',
    initialState: initialPensionButtons,

    reducers: {
        voluntary: (state = {}, action = {}) => {
            state.pensionType = pensionAction.VOLUNTARY;
            selectedTypes.pensionType = state.pensionType
        },
        compulsory: (state = {}, action = {}) => {
            state.pensionType = pensionAction.COMPULSORY;
            selectedTypes.pensionType = state.pensionType
        },
        unpaid: (state = {}, action = {}) => {
            state.pensionType = pensionAction.UNPAID;
            selectedTypes.pensionType = state.pensionType
        },
    }
});

export const { voluntary, compulsory, unpaid } = pensionButtonsSlice.actions;

export const selectPensionButton = (state) => state.pensionType.pensionType;

export default pensionButtonsSlice.reducer;