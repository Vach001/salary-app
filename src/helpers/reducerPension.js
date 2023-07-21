import { initialState } from "../constants/initialState.constants";
import { VOLUNTARY, COMPULSORY, UNPAID } from "../constants/pensionAction.constants"


export default function reducerPension(state = initialState, action) {

    switch (action.type) {
        case VOLUNTARY:
            return action.payload.soc;
        case COMPULSORY:
            return action.payload.soc;
        case UNPAID:
            return action.payload.soc;
        default:
            return state;
    }
};