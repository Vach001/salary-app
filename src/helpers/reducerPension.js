import { initialState } from "../constants/initialState.constants";
import { VOLUNTARY, COMPULSORY, UNPAID } from "../constants/pensionAction.constants"


export default function reducerPension(state = initialState, action) {

    switch (action.pensionAction.type) {
        case VOLUNTARY:
            action.payload.soc = 5;
            break;
        case COMPULSORY:
            action.payload.soc = 5;
            break;
        case UNPAID:
            action.payload.soc = 0;
            break;
        default:
            return state;
    }
};