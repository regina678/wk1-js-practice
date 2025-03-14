function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation (Based on 2025 Tax Brackets)
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; // 10%
    } else if (grossSalary <= 32333) {
        tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% above 24,000
    } else if (grossSalary <= 500000) {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3; // 30% above 32,333
    } else if (grossSalary <= 800000) {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.325; // 32.5% above 500,000
    } else {
        tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // 35% above 800,000
    }

    // SHIF Contribution (2.75% of Gross Salary)
    let shif = grossSalary * 0.0275;

    // NSSF Contribution (6% of Pensionable Pay)
    let nssf = 0;
    if (grossSalary <= 8000) {
        nssf = grossSalary * 0.06; // Tier I
    } else if (grossSalary <= 72000) {
        nssf = (8000 * 0.06) + ((grossSalary - 8000) * 0.06); // Tier I + Tier II
    } else {
        nssf = (8000 * 0.06) + (64000 * 0.06); // Maximum NSSF Contribution
    }

    // Housing Levy (1.5% of Gross Salary)
    let housingLevy = grossSalary * 0.015;

    // Calculate Net Salary
    let netSalary = grossSalary - (tax + shif + nssf + housingLevy);

    // Output the results
    return {
        Gross_Salary: grossSalary,
        PAYE_Tax: tax,
        SHIF_Deduction: shif,
        NSSF_Deduction: nssf,
        Housing_Levy: housingLevy,
        Net_Salary: netSalary
    };
}


const basicSalary = 50000;  
const benefits = 10000;  
const salaryDetails = calculateNetSalary(basicSalary, benefits);


console.log("Salary Breakdown:");
console.log(`Gross Salary: Ksh ${salaryDetails.Gross_Salary.toFixed(2)}`);
console.log(`PAYE Tax: Ksh ${salaryDetails.PAYE_Tax.toFixed(2)}`);
console.log(`SHIF Deduction: Ksh ${salaryDetails.SHIF_Deduction.toFixed(2)}`);
console.log(`NSSF Deduction: Ksh ${salaryDetails.NSSF_Deduction.toFixed(2)}`);
console.log(`Housing Levy: Ksh ${salaryDetails.Housing_Levy.toFixed(2)}`);
console.log(`Net Salary: Ksh ${salaryDetails.Net_Salary.toFixed(2)}`);
