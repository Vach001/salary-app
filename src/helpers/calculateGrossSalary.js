import { initialState } from "../constants/initialState.constants";
import selectedTypes from "./selectedTypes";

const { salaryType, pensionType, iTCheckType } = selectedTypes;
let { salary, incomeTax, stampFee, pension, sumFee, finalSalary, salX } = initialState;

export function calculateGrossSalary() {
    salary = Number(salary)

    if (salaryType === "GROSS") {
        incomeTax = iTCheckType ? Math.round(salary * 0.1) : Math.round(salary * 0.2);

        if (pensionType === "VALUNTARY") {
            pension = Math.round(salary <= 1125000 ? salary * 0.05 : 56250);
        }
        if (pensionType === "COMPULSORY") {
            pension = Math.round(
                salary <= 500000 ? salary * 0.05 :
                salary <= 1125000 ? salary * 0.1 - 25000 : 87500
            );
        }
        if (pensionType === "UNPAID") {
            pension = 0;
        }
        stampFee = Math.round(
            salary < 100001 ? 1500 :
            salary < 200001 ? 3000 :
            salary < 500001 ? 5500 :
            salary < 1000001 ? 8500 : 15000
        );
        sumFee = incomeTax + pension + stampFee;
        salX = salary - sumFee;
        finalSalary = salX;

        initialState.incomeTax = incomeTax;
        initialState.stampFee = stampFee;
        initialState.pension = pension;
        initialState.sumFee = sumFee;
        initialState.finalSalary = finalSalary;
        initialState.salX = salX;
    }
    return initialState
}