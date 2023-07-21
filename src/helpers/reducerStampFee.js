import { initialState } from "../constants/initialState.constants";

const {sal, ekamtayin, droshmanishayin, soc, sumFee, finalSalary, salX} = initialState;

export default function reducerStampFee(state = initialState, action) {

    if (sal >= 1000001) {
        return action.payload.droshmanishayin; // 15000
    } else if (sal >= 500001) {
        return action.payload.droshmanishayin; // 8500
    } else if (sal >= 200001) {
        return action.payload.droshmanishayin; // 5500
    } else if (sal >= 100001) {
        return action.payload.droshmanishayin; // 3000
    } else if (sal >= 1500) {
        return action.payload.droshmanishayin; // 1500
    } else {
        return action.payload.droshmanishayin; // 0
    }
} 