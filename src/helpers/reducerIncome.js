import { CERTIFIED, UNCERTIFIED } from "../constants/iTAction.constants";
import { initialState } from "../constants/initialState.constants";

export default function reducerIncome(state = initialState, action) {

    switch (action.type) {
        case CERTIFIED:
            action.payload.ekamtayin = 10;

            return action.payload.ekamtayin;
        case UNCERTIFIED:
            action.payload.ekamtayin = 20;

            return action.payload.ekamtayin;
        default:
            return state;
    }
}