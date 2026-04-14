import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incomeTax } from "../features/incomeTax/incomeTaxSlice";
import { pensionTax } from "../features/pensionTax/pensionTaxSlice";
import { stampFee } from "../features/stampFee/stampFeeSlice";
import { sumFee } from "../features/sumFee/sumFeeSlice";
import { finalSalary } from "../features/finalSalary/finalSalarySlice";
import { netToGross } from "../features/netToGrossSlice";

export const useTaxCalculations = () => {
    const dispatch = useDispatch();
    const salary = useSelector((state) => state.salaryInput?.salary || 0);
    const salaryType = useSelector((state) => state.salaryType?.salaryType || "GROSS");

    const recalculateAll = useCallback(() => {
        if (salary <= 0) return;
        
        if (salaryType === "GROSS") {
            // GROSS → NET
            dispatch(incomeTax());
            dispatch(pensionTax());
            dispatch(stampFee());
            dispatch(sumFee());
            dispatch(finalSalary());
        } else if (salaryType === "NET") {
            // NET → GROSS
            dispatch(netToGross());
        }
    }, [dispatch, salary, salaryType]);

    return { recalculateAll };
};