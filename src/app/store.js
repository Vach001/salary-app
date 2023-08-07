import { configureStore} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import salaryTypeReducer, { grossSalary, netSalary } from "../features/salaryButtons/salaryButtonsSlice"
import pensionTypeReducer from "../features/pensionType/pensionButtonsSlice"
import iTCheckTypeReducer from "../features/iTCheckType/iTCheckTypeSlice"
import salaryInputReducer from "../features/salaryInput/salaryInputSlice"
import incomeTaxReducer from "../features/incomeTax/incomeTaxSlice";
import pensionTaxReducer from "../features/pensionTax/pensionTaxSlice"
import stampFeeReducer from "../features/stampFee/stampFeeSlice"
import sumFeeReducer from "../features/sumFee/sumFeeSlice"
import finalSalaryReducer from "../features/finalSalary/finalSalarySlice"

export const store = configureStore({
    reducer: {
        salaryType: salaryTypeReducer,
        pensionType: pensionTypeReducer,
        iTCheckType: iTCheckTypeReducer,
        salaryInput: salaryInputReducer,
        incomeTax:  incomeTaxReducer,
        pensionTax: pensionTaxReducer,
        stampFee: stampFeeReducer,
        sumFee: sumFeeReducer,
        finalSalary: finalSalaryReducer,
    },
    
})
