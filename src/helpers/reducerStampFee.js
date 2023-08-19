import { initialState } from "../constants/initialState.constants";

const {sal, stampFee} = initialState;

export default function reducerStampFee(state = initialState, action) {

    if (salary >= 1000001) {
        action.payload.stampFee = 15000;
        return action.payload.stampFee;
    } else if (salary >= 500001) {
        action.payload.stampFee = 8500;
        return action.payload.stampFee;
    } else if (salary >= 200001) {
        action.payload.stampFee = 5500;
        return action.payload.stamp;
    } else if (salary >= 100001) {
        action.payload.stampFee = 3000;
        return action.payload.stampFee;
    } else if (salary >= 1500) {
        action.payload.stampFee = 1500
        return action.payload.stampFee;
    } else {
        action.payload.stampFee = 0;
        return action.payload.stampFee;
    }
} 