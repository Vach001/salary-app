import { CERTIFIED, UNCERTIFIED } from "../constants/iTAction.constants";
import { initialState } from "../constants/initialState.constants";

export default function reducerIncome(state = initialState, action) {

    switch (action.type) {
        case CERTIFIED:
            return action.payload.ekamtayin; // 10%
        case UNCERTIFIED:
            return action.payload.ekamtayin; // 20%
        default:
            return state;
    }
}