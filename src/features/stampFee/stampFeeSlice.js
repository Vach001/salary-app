import { createSlice } from "@reduxjs/toolkit";

const calculateStampFeeValue = (salary, year) => {
    if (!salary || salary <= 0) return 0;
    if (year >= 2026) {
        return salary <= 1000000 ? 1000 : 15000;
    }
    if (salary < 2000) return 0;
    if (salary < 100001) return 1500;
    if (salary < 200001) return 3000;
    if (salary < 500001) return 5500;
    if (salary < 1000001) return 8500;
    return 15000;
};

const stampFeeSlice = createSlice({
    name: "stampFee",
    initialState: { stampFee: 0 },
    reducers: {
        setStampFee: (state, action) => {
            state.stampFee = action.payload;
        }
    }
});

export const { setStampFee } = stampFeeSlice.actions;

export const stampFee = () => (dispatch, getState) => {
    const state = getState();
    const salary = state.salaryInput?.salary || 0;
    const year = state.year?.year || new Date().getFullYear();
    dispatch(setStampFee(calculateStampFeeValue(salary, year)));
};

export const selectSalaryStampFee = (state) => state.stampFee?.stampFee || 0;
export default stampFeeSlice.reducer;