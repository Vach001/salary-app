import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { initialSalary, salaryReducer } from "../features/salaryInput/salaryInputSlice";
import { initialState } from "../constants/initialState.constants";
import { IncomeTaxReducer } from "../features/incomeTax/incomeTaxSlice";

export const store = createStore(combineReducers({
    salary: salaryReducer,
    incomeTax: IncomeTaxReducer
}), {
    salary: initialState
})
