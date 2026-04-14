export const calculateHealthInsurance = (salary, isMember, year) => {
    if (year < 2026 || !isMember) return 0;
    if (salary <= 500000) return 4800;
    return 10800;
};

const initialState = {
    salary: 0,
    isMember: false,
    healthInsurance: 0,
};

export default function healthInsuranceReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SALARY": {
            const year = action.payload?.year || 2026;
            const salary = action.payload?.salary || 0;
            const isMember = state.isMember;
            return {
                ...state,
                salary: salary,
                healthInsurance: calculateHealthInsurance(salary, isMember, year),
            };
        }
        case "SET_HEALTH_INSURANCE_MEMBER": {
            const year = action.payload?.year || 2026;
            const salary = state.salary;
            const isMember = action.payload?.isMember || false;
            return {
                ...state,
                isMember: isMember,
                healthInsurance: calculateHealthInsurance(salary, isMember, year),
            };
        }
        case "SET_HEALTH_INSURANCE": {
            return {
                ...state,
                healthInsurance: action.payload,
            };
        }
        default:
            return state;
    }
}

export const selectHealthInsurance = (state) => state.healthInsurance?.healthInsurance || 0;
export const selectIsHealthInsuranceMember = (state) => state.healthInsurance?.isMember || false;