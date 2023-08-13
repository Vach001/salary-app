import selectedTypes from "./selectedTypes";
import { initialState } from "../constants/initialState.constants";
import { salaryAction } from "../constants/salaryAction.constants";
import { iTAction } from "../constants/iTAction.constants";
import { pensionAction } from "../constants/pensionAction.constants";
// import SalaryInput from "../Components/SalaryInput/SalaryInput";

let { salary, incomeTax, stampFee, pension, sumFee, finalSalary, salX } = initialState;

export function calculateNetSalaryWithIT() {
  salary = Number(initialState.salary)

  if (selectedTypes.salaryType === salaryAction.NET && iTAction.CERTIFIED) {
    if (selectedTypes.pensionType === pensionAction.VOLUNTARY) {
      if (salary >= 0 && salary <= 83500) {
        finalSalary = Math.round((Number(salary) + 1500) / 0.85);
      } else if (salary > 83500 && salary <= 167000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.85);
      } else if (salary > 167000 && salary <= 419500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.85);
      } else if (salary > 419500 && salary <= 841500) {
        finalSalary = Math.round((Number(salary) + 8500) / 0.85);
      } else if (salary > 841500 && salary <= 941250) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.85);
      } else if (salary > 941250) {
        finalSalary = Math.round((Number(salary) + 15000 + 56250) / 0.9);
      }
      pension = Math.round(finalSalary <= 1125000 ? finalSalary * 0.05 : 56250);
    }

    if (selectedTypes.pensionType === pensionAction.COMPULSORY) {
      if (salary >= 0 && salary <= 83500) {
        finalSalary = Math.round((Number(salary) + 1500) / 0.85);
      } else if (salary > 83500 && salary <= 167000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.85);
      } else if (salary > 167000 && salary <= 419500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.85);
      } else if (salary > 419500 && salary <= 816500) {
        finalSalary = Math.round((Number(salary) + 8500 - 25000) / 0.8);
      } else if (salary > 816500 && salary <= 910000) {
        finalSalary = Math.round((Number(salary) + 15000 - 25000) / 0.8);
      } else if (salary > 910000) {
        finalSalary = Math.round((Number(salary) + 15000 + 87500) / 0.9);
      }
      pension = Math.round(
        finalSalary < 500000 ? finalSalary * 0.05 :
          finalSalary < 1125000 ? finalSalary * 0.1 - 25000 : 87500
      );
    }

    if (selectedTypes.pensionType === pensionAction.UNPAID) {
      if (salary >= 0 && salary <= 88500) {
        finalSalary = Math.round((Number(salary) + 1500) / 0.9);
      } else if (salary > 88500 && salary <= 177000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.9);
      } else if (salary > 177000 && salary <= 444500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.9);
      } else if (salary > 444500 && salary <= 891500) {
        finalSalary = Math.round((Number(salary) + 8500) / 0.9);
      } else if (salary > 891500 && salary <= 997500) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.9);
      } else if (salary > 997500) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.9);
      }
      pension = 0;
    }

    incomeTax = Math.round(finalSalary * 0.1);

    stampFee = Math.round(
      finalSalary < 100001 ? 1500 :
      finalSalary < 200001 ? 3000 :
      finalSalary < 500001 ? 5500 :
      finalSalary < 1000001 ? 8500 : 15000
    );

    sumFee = incomeTax + pension + stampFee;
    finalSalary = salary + sumFee;

    initialState.incomeTax = incomeTax;
    initialState.stampFee = stampFee;
    initialState.pension = pension;
    initialState.sumFee = sumFee;
    initialState.finalSalary = finalSalary;
  }
  return initialState
}
