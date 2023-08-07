import { configureStore} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import salaryTypeReducer, { grossSalary, netSalary } from "../features/salaryButtons/salaryButtonsSlice"
import pensionTypeReducer from "../features/pensionType/pensionButtonsSlice"
import iTCheckTypeReducer from "../features/iTCheckType/iTCheckTypeSlice"
import salaryInputReducer from "../features/salaryInput/salaryInputSlice"
import IncomeTaxReducer from "../features/incomeTax/incomeTaxSlice";


export const store = configureStore({
    reducer: {
        salaryType: salaryTypeReducer,
        pensionType: pensionTypeReducer,
        iTCheckType: iTCheckTypeReducer,
        salaryInput: salaryInputReducer,
        incomeTax: IncomeTaxReducer,
    },
    
})
