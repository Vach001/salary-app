import { iTAction } from "../constants/iTAction.constants";
import { initialState } from "../constants/initialState.constants";
import { pensionAction } from "../constants/pensionAction.constants";
import { salaryAction } from "../constants/salaryAction.constants";
import selectedTypes from "./selectedTypes";

let { salary, incomeTax, stampFee, pension, sumFee, finalSalary, salX } = initialState;

export function calculateNetSalaryDisIT() {
  salary = Number(initialState.salary)

  if (selectedTypes.salaryType === salaryAction.NET && selectedTypes.iTCheckType === iTAction.UNCERTIFIED) {
    if (selectedTypes.pensionType === pensionAction.VOLUNTARY) {

      if (salary >= 0 && salary <= 73500) {
        finalSalary = Math.round(Number(salary) / 0.75 + 1500 / 0.75);
      } else if (salary > 73500 && salary <= 75000) {
        finalSalary = Math.round(Number(salary) / 0.75 + 3000 / 0.75);
      } else if (salary > 75000 && salary <= 147000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.75);
      } else if (salary > 147000 && salary <= 369500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.75);
      } else if (salary > 369500 && salary <= 741500) {
        finalSalary = Math.round((Number(salary) + 8500) / 0.75);
      } else if (salary > 741500 && salary <= 828750) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.75);
      } else if (salary > 828750) {
        finalSalary = Math.round((Number(salary) + 15000 + 56250) / 0.8);
      }

      pension = Math.round(finalSalary <= 1125000 ? finalSalary * 0.05 : 56250);

    }
    if (selectedTypes.pensionType === pensionAction.COMPULSORY) {

      if (salary >= 0 && salary <= 73500) {
        finalSalary = Math.round(Number(salary) / 0.75 + 1500 / 0.75);
      } else if (salary > 73500 && salary <= 75000) {
        finalSalary = Math.round(Number(salary) / 0.75 + 3000 / 0.75);
      } else if (salary > 75000 && salary <= 147000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.75);
      } else if (salary > 147000 && salary <= 369500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.75);
      } else if (salary > 369500 && salary <= 716500) {
        finalSalary = Math.round((Number(salary) + 8500 - 25000) / 0.7);
      } else if (salary > 716500 && salary <= 797500) {
        finalSalary = Math.round((Number(salary) + 15000 - 25000) / 0.7);
      } else if (salary > 797500) {
        finalSalary = Math.round((Number(salary) + 15000 + 87500) / 0.8);
      }

      pension = Math.round(
        finalSalary <= 500000 ? finalSalary * 0.05 :
        finalSalary <= 1125000 ? finalSalary * 0.1 - 25000 : 87500);

    }
    if (selectedTypes.pensionType === pensionAction.UNPAID) {
      if (salary > 0 && salary <= 78500) {
        finalSalary = Math.round((Number(salary) + 1500) / 0.8);
      } else if (salary > 78500 && salary <= 157000) {
        finalSalary = Math.round((Number(salary) + 3000) / 0.8);
      } else if (salary > 157000 && salary <= 394500) {
        finalSalary = Math.round((Number(salary) + 5500) / 0.8);
      } else if (salary > 394500 && salary <= 791500) {
        finalSalary = Math.round((Number(salary) + 8500) / 0.8);
      } else if (salary > 791500 && salary <= 885000) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.8);
      } else if (salary > 885000) {
        finalSalary = Math.round((Number(salary) + 15000) / 0.8);
      }
      pension = 0;
    }

    incomeTax = Math.round(finalSalary * 0.2);
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