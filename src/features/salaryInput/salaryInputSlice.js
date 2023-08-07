import { createSlice } from "@reduxjs/toolkit"

// export const initialSalary = {
//     salary: 0,
//     incomeTax: 0,
//     stampFee: 0,
//     pension: 0,
//     sumFee: 0,
//     finalSalary: 0,
//     salX: 0
// }

const initialInput = {
    salary: ""
}

export const salaryInputSlice = createSlice({
    name: "salaryInput",
    initialState: initialInput,

    reducers: {
        inputSalary: (state = {}, action = {}) => {
            state.salary = action.payload
        }
    }
})
    
//     if(action.type === "edit-salary-input") {
//         return {
//             ...state,
//             salary: action.payload.salary
//         }
//     }
//     return state;
// } 
 
export const { inputSalary } = salaryInputSlice.actions

export const selectSalaryInput = (state) => state.salaryInput.salary;

export default salaryInputSlice.reducer


// export function selectSalaryInput(state) {
//     return state.salary.salary
// }

// export function editSalaryinput(newValue) {
//     return {
//         type: "edit-salary-input",
//         payload: {
//             salary: newValue
//         }
//     }
// }


// export const salaryButtonsSlice = createSlice({
//     name: 'salaryType',
//     initialState: initialSalaryButtons,

//     reducers: {
//         grossSalary: (state = {}) => {
//             state.salaryType = "GROSS";
//         },

    
// });

// export const { grossSalary, netSalary } = salaryButtonsSlice.actions;


// export default salaryButtonsSlice.reducer;