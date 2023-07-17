export default function reducerStampFee(gross, action) {

    if (gross >= 1000001) {
        action.payload.stamp = 15000;
        return action.payload.stamp;
    } else if (gross >= 500001) {
        action.payload.stamp = 8500;
        return action.payload.stamp;
    } else if (gross >= 200001) {
        action.payload.stamp = 5500;
        return action.payload.stamp;
    } else if (gross >= 100001) {
        action.payload.stamp = 3000;
        return action.payload.stamp;
    } else if (gross >= 1500) {
        action.payload.stamp = 1500
        return action.payload.stamp;
    } else {
        action.payload.stamp = 0;
        return action.payload.stamp;
    }
} 