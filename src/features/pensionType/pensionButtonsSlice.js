import { createSlice } from "@reduxjs/toolkit"
import { pensionAction } from "../../constants/pensionAction.constants"

const initialPensionButtons = {
    pensionType: pensionAction.VOLUNTARY,
}

export const pensionButtonsSlice = createSlice({
    name: 'pensionType',
    initialState: initialPensionButtons,

    reducers: {
        voluntary: (state = {}, action = {}) => {
            state.pensionType = pensionAction.VOLUNTARY;;
        },
        compulsory: (state = {}, action = {}) => {
            state.pensionType = pensionAction.COMPULSORY;
        },
        unpaid: (state = {}, action = {}) => {
            state.pensionType = pensionAction.UNPAID;
        },
    }
});

export const { voluntary, compulsory, unpaid } = pensionButtonsSlice.actions;

export const selectPensionButton = (state) => state.pensionType.pensionType;

export default pensionButtonsSlice.reducer;