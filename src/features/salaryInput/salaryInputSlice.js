import { createSlice } from "@reduxjs/toolkit"

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
    
export const { inputSalary } = salaryInputSlice.actions

export const selectSalaryInput = (state) => state.salaryInput.salary;

export default salaryInputSlice.reducer