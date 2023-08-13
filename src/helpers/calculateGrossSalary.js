import { iTAction } from "../constants/iTAction.constants";
import { initialState } from "../constants/initialState.constants";
import { pensionAction } from "../constants/pensionAction.constants";
import { salaryAction } from "../constants/salaryAction.constants";
import selectedTypes from "./selectedTypes";

let { salary, incomeTax, stampFee, pension, sumFee, finalSalary, salX } = initialState;

export function calculateGrossSalary() {
    salary = Number(initialState.salary)

    if (selectedTypes.salaryType === salaryAction.GROSS) {
        incomeTax = selectedTypes.iTCheckType === iTAction.CERTIFIED ? Math.round(salary * 0.1) : Math.round(salary * 0.2);

        if (selectedTypes.pensionType === pensionAction.VOLUNTARY) {
            pension = Math.round(salary <= 1125000 ? salary * 0.05 : 56250);
        }
        if (selectedTypes.pensionType === pensionAction.COMPULSORY) {
            pension = Math.round(
                salary <= 500000 ? salary * 0.05 :
                salary <= 1125000 ? salary * 0.1 - 25000 : 87500
            );
        }
        if (selectedTypes.pensionType === pensionAction.UNPAID) {
            pension = 0;
        }           
        stampFee = Math.round(
            salary < 100001 ? 1500 :
            salary < 200001 ? 3000 :
            salary < 500001 ? 5500 :
            salary < 1000001 ? 8500 : 15000
        );
        sumFee = incomeTax + pension + stampFee;
        finalSalary = salary - sumFee;

        initialState.incomeTax = incomeTax;
        initialState.stampFee = stampFee;
        initialState.pension = pension;
        initialState.sumFee = sumFee;
        initialState.finalSalary = finalSalary;
    }
   return {incomeTax, stampFee, pension, sumFee, finalSalary, salX}
}    

// console.log(calculateGrossSalary())