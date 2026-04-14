import { pensionAction } from "../constants/pensionAction.constants";

export const calculateNetFromGross = (gross, isIT, pensionType, year, isHealthMember) => {
    if (gross <= 0) return 0;
    
    // Եկամտային հարկ
    const incomeTax = Math.round(isIT ? gross * 0.1 : gross * 0.2);
    
    // Սոցվճար
    let pension = 0;
    if (pensionType === pensionAction.VOLUNTARY) {
        pension = Math.min(Math.round(gross * 0.05), 56250);
    } else if (pensionType === pensionAction.COMPULSORY) {
        if (gross <= 500000) pension = Math.round(gross * 0.05);
        else if (gross <= 1125000) pension = Math.round(gross * 0.1 - 25000);
        else pension = 87500;
    }
    
    // Դրոշմանիշային վճար 
    let stampFee = 0;
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
    
    // Առողջապահություն 
    let health = 0;
    if (year >= 2026 && isHealthMember) {
        health = gross <= 500000 ? 4800 : 10800;
    }
    
    // Net = Gross
    return gross - incomeTax - pension - stampFee - health;
};

export const calculateGrossFromNet = (netSalary, isIT, pensionType, year, isHealthMember) => {
    if (netSalary <= 0) return 0;
    
    // Փնտրել ամենափոքր gross-ը, որը տալիս է netSalary
    let gross = netSalary;
    const maxGross = netSalary * 3;
    
    while (gross <= maxGross) {
        const calculatedNet = Math.round(calculateNetFromGross(gross, isIT, pensionType, year, isHealthMember));
        
        if (calculatedNet === netSalary) {
            return gross;
        }
        
        if (calculatedNet < netSalary) {
            const diff = netSalary - calculatedNet;
            const step = Math.max(1, Math.floor(diff / 10));
            gross += step;
        } else {
            break;
        }
        
        if (gross > maxGross) break;
    }
    
    // Ստուգել մոտակա 200 արժեքները (ճշգրտության համար)
    let bestGross = netSalary;
    let bestDiff = Infinity;
    
    for (let i = -100; i <= 100; i++) {
        const candidate = netSalary + i;
        if (candidate <= 0) continue;
        const calculatedNet = Math.round(calculateNetFromGross(candidate, isIT, pensionType, year, isHealthMember));
        const diff = Math.abs(calculatedNet - netSalary);
        
        if (diff < bestDiff || (diff === bestDiff && candidate < bestGross)) {
            bestDiff = diff;
            bestGross = candidate;
        }
    }
    
    return bestGross;
};