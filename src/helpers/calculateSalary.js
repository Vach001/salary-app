import selectedTypes from "./selectedTypes";
import { initialState } from "../constants/initialState.constants";

const salaryType = selectedTypes.salaryType;
const pensionType = selectedTypes.pensionType;
const iTCheckType = selectedTypes.iTCheckType;

const salary = initialState.salary;
let incomeTax = initialState.incomeTax;
let stampFee = initialState.stampFee;
let pension = initialState.pension;
let sumFee = initialState.sumFee;
let finalSalary = initialState.finalSalary;
let salX = initialState.salX;

const calculateSalary = function () {

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

  }

  if (salaryType === "NET") {
    if (iTCheckType === false) {
      if (pensionType === "VALUNTARY") {

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
      if (pensionType === "COMPULSORY") {

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
      if (pensionType === "UNPAID") {
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
      salX = finalSalary - sumFee;
      finalSalary = salX;
    }

    if (iTCheckType) {
      if (pensionType === "VALUNTARY") {
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
        }else if (salary > 941250) {
          finalSalary = Math.round((Number(salary) + 15000 + 56250) / 0.9);
        }
        pension = Math.round(finalSalary <= 1125000 ? finalSalary * 0.05 : 56250);

      }

      if (pensionType === "COMPULSORY") {
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
        }else if (salary > 910000) {
          finalSalary = Math.round((Number(salary) + 15000 + 87500) / 0.9);
        }
        pension = Math.round(
          finalSalary < 500000 ? finalSalary * 0.05 :
          finalSalary < 1125000 ? finalSalary * 0.1 - 25000 : 87500
        );
      }

      if (pensionType === "UNPAID") {
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
      salX = finalSalary - sumFee;
      finalSalary = salX;
    }
  }
}