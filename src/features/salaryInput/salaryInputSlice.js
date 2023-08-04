// import { createSlice } from "@reduxjs/toolkit"

// export const initialSalary = {
//     salary: 0,
//     incomeTax: 0,
//     stampFee: 0,
//     pension: 0,
//     sumFee: 0,
//     finalSalary: 0,
//     salX: 0
// }

export function salaryReducer(state={}, action) {
    if(action.type === "edit-salary-input") {
        return {
            ...state,
            salary: action.payload.salary
        }
    }
    return state;
} 

export function selectSalaryInput(state) {
    return state.salary.salary
}

export function editSalaryinput(newValue) {
    return {
        type: "edit-salary-input",
        payload: {
            salary: newValue
        }
    }
}

