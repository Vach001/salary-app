import { iTAction } from "../constants/iTAction.constants";

export default function reducerIncome(gross, action) {
    const { certified, uncertified } = iTAction;

    switch (action.type) {
        case certified:
            action.payload.incom = gross * 0.1;

            return action.payload.incom;
        case uncertified:
            action.payload.incom = gross * 0.2;

            return action.payload.incom;
    }
}