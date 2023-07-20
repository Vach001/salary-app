import { voluntary, compulsory, unpaid } from "../constants/pensionAction.constants";
import { GROSS, NET } from "../constants/salaryAction.constants";
import { sal, ekamtayin, droshmanishayin, soc, sumFee, finalSalary, salX } from "../constants/initialState.constants"

// const {voluntary, compulsory, unpaid} = pensionAction;
// const {GROSS, NET} = salaryAction;

export default function reducerPension(state, action) {
    if (action.type === NET) {
        if (action.type === unpaid) {
            soc = 0;
            switch (true) {
                case sal <= 1500:
                    droshmanishayin = 0;
                    break;
                case sal <= 78500:
                    droshmanishayin = 1500;
                    break;
                case sal > 78500 && sal <= 157000:
                    droshmanishayin = 3000;
                    break;
                case sal > 157000 && sal <= 394500:
                    droshmanishayin = 5500;
                    break;
                case sal > 394500 && sal <= 791500:
                    droshmanishayin = 8500;
                    break;
                case sal > 791500:
                    droshmanishayin = 15000;
            }

        }
    }
    return ({
        ...state,
        salX: Math.round(((sal + droshmanishayin) * 100) / (100 - ekamtayin)),
        soc: 0,
        droshmanishayin,
        ekamtayin: Math.round((x * ekamtayin) / 100),
        finalSalary: Math.round(salX)
    });

}