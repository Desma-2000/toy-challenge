
//3rd quiz
const benefits = parseFloat(prompt("enter benefits:"));
const basicSalary = parseFloat(prompt('enter basic salary:'));
const TAX_RATES = [
    { limit: 24000, rate: 10 },
    { limit: 32333, rate: 25 },
    { limit: 500000, rate: 30 },
    { limit: 800000, rate: 32.5 },
    { limit: Infinity, rate: 35 },
  ];
  const NHIF_RATES = [
    { limit: 5999, deduction: 150 },
    { limit: 7999, deduction: 300 },
    { limit: 11999, deduction: 400 },
    { limit: 14999, deduction: 500 },
    { limit: 19999, deduction: 600 },
    { limit: 24999, deduction: 750 },
    { limit: 29999, deduction: 850 },
    { limit: 34999, deduction: 900 },
    { limit: 11999, deduction: 1000 },
    { limit: 11999, deduction: 1100 },
    { limit: 11999, deduction: 1200 },
    { limit: 11999, deduction: 1300 },
    { limit: 11999, deduction: 1400 },
    { limit: 11999, deduction: 1500 },
    { limit: 11999, deduction: 1600 },
    { limit: Infinity, deduction: 1700 },
  ];
const NSSF_RATE = 6;
const grossSalary = basicSalary + benefits;
let taxableIncome = grossSalary-24000;
let tax =0;
TAX_RATES.forEach(({limit,rate}))  => {
    if (taxableIncome<=0)
    return;
const taxableAmount = Math.min(taxableIncome,limit);
tax+=taxableAmount*(rate/100);
taxableIncome -=taxableAmount;
};
let nhifDeductions = 0;
NHIF_RATES.some(({limit,deduction})=> {
    if (grossSalary<=limit){
        nhifDeductions =deduction;
        return true;
    }
    return false;
});
const nssfDeductions =Math.min(basicSalary*(NSSF_RATE/100),200);
const netSalary =grossSalary-tax-nhifDeductions-nssfDeductions;
console.log("net salary:" + netSalary)