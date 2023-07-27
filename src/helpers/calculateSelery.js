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
      pension = Math.round(
        salary < 500000 ? salary * 0.05 :
        salary > 1125000 ? 1125000 * 0.1 - 25000 : salary * 0.1 - 25000
      );
      if (pension >= 56250) {
        pension = 56250;
      }
    }
    if (pensionType === "COMPULSORY") {
      pension = Math.round(
        salary < 500000 ? salary * 0.05 :
          salary > 1125000 ? 1125000 * 0.1 - 25000 : salary * 0.1 - 25000
      );
      if (pension >= 87500) {
        pension = 87500;
      }
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


  
};