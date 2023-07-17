import { pensionAction } from "../constants/pensionAction.constants";

export default function reducerPension(gross, action){

    const [voluntary, compulsory, unpaid] = pensionAction;

   if (action.type === compulsory) {
        if (gross > 1125000) {
            return (action.payload.pension = 87500);
        } else if (gross > 500000) {
            return (action.payload.pension = (gross * 0.1 - 25000));
        } else {
            return (action.payload.pension = (gross * 0.05));
        }
    }
    if (action.type === voluntary) {
        if (gross > 1125000) {
            return action.payload.pension = 56250;
        } else {
            return action.payload.pension = (gross * 0.5);
        }
    }
    if(action.type === unpaid) {
        return action.payload.pension = 0
    }
}

