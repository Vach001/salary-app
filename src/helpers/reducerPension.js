import { initialState } from "../constants/initialState.constants";
import { VOLUNTARY, COMPULSORY, UNPAID } from "../constants/pensionAction.constants"


export default function reducerPension(state = initialState, action) {

    switch (action.pensionAction.type) {
        case VOLUNTARY:
            action.payload.pension = 5;
            break;
        case COMPULSORY:
            action.payload.pension = 5;
            break;
        case UNPAID:
            action.payload.pension = 0;
            break;
        default:
            return state;
    }
};