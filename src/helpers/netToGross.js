import { pensionAction } from "../constants/pensionAction.constants";

export const calculateNetFromGross = (gross, isIT, pensionType, year, isHealthMember) => {
    if (gross <= 0) return 0;
    
    const incomeTax = Math.round(isIT ? gross * 0.1 : gross * 0.2);
    
    let pension = 0;
    if (pensionType === pensionAction.VOLUNTARY) {
        pension = Math.min(Math.round(gross * 0.05), 56250);
    } else if (pensionType === pensionAction.COMPULSORY) {
        if (gross <= 500000) pension = Math.round(gross * 0.05);
        else if (gross <= 1125000) pension = Math.round(gross * 0.1 - 25000);
        else pension = 87500;
    }
    
    let stampFee;
    if (year >= 2026) {
        stampFee = gross <= 1000000 ? 1000 : 15000;
    } else {
        if (gross < 2000) stampFee = 0;
        else if (gross < 100001) stampFee = 1500;
        else if (gross < 200001) stampFee = 3000;
        else if (gross < 500001) stampFee = 5500;
        else if (gross < 1000001) stampFee = 8500;
        else stampFee = 15000;
    }
    
    // ✅ Health insurance - 10800 եթե gross > 500000
    let health = 0;
    if (year >= 2026 && isHealthMember) {
        health = gross > 500000 ? 10800 : 4800;
    }
    
    return gross - incomeTax - pension - stampFee - health;
};

export const calculateGrossFromNet = (netSalary, isIT, pensionType, year, isHealthMember) => {
    if (netSalary <= 0) return 0;
    
    let bestGross = netSalary;
    let bestDiff = Infinity;
    
    for (let gross = netSalary; gross <= netSalary * 2; gross++) {
        const calculatedNet = Math.round(calculateNetFromGross(gross, isIT, pensionType, year, isHealthMember));
        const diff = Math.abs(calculatedNet - netSalary);
        
        if (diff < bestDiff) {
            bestDiff = diff;
            bestGross = gross;
        }
        
        if (diff === 0) {
            bestGross = gross;
            break;
        }
    }
    
    return bestGross;
};