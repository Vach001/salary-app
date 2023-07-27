import {CERTIFIED, UNCERTIFIED} from "../constants/iTAction.constants";
import {initialState} from "../constants/initialState.constants";

export default function reducerIncome(state = initialState, action) {

    switch (action.iTAction.type) {
        case CERTIFIED:
            action.payload.incomeTax = 10; 
            break;
        case UNCERTIFIED:
            action.payload.incomeTax = 20;
            break;
        default:
            return state;
    }
}
