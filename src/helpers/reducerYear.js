const initialState = { year: new Date().getFullYear() };

export default function yearReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_YEAR":
            return { ...state, year: action.payload };
        default:
            return state;
    }
}

export const selectYear = (state) => state.year?.year || new Date().getFullYear();