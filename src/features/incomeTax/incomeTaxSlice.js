export function IncomeTaxReducer(state={}, action) {
    if(action.type === "income-tax") {
        return {
            ...state,
            incomeTax: action.payload.incomeTax
        }
    }
    return state;
} 

export function selectSalaryIncomeTax(state) {
    return state.salary.incomeTax
}

export function editSalaryIncomeTax(newValue) {
    return {
        type: "income-tax",
        payload: {
            incomeTax: newValue
        }
    }
}

