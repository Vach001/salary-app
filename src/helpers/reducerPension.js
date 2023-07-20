import { initialState } from "../constants/initialState.constants";
import { VOLUNTARY, COMPULSORY, UNPAID } from "../constants/pensionAction.constants"


export default function reducerPension(state = initialState, action) {

    switch (action.type) {
        case VOLUNTARY:
            action.payload.soc = 5;

            return action.payload.soc;
        case COMPULSORY:
            action.payload.soc = 5;

            return action.payload.soc;
        case UNPAID:
            action.payload.soc = 0;

            return action.payload.soc;
        default:
            return state;
    }
};