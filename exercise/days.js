const days = 400;
const daysInYears = 365;
const daysInMonths = 30;

const year = Math.floor(days / daysInYears);
const residualYear = days - daysInYears;
const month = Math.floor(residualYear / daysInMonths);
const residualMonth = residualYear % daysInMonths;
console.log(`${year} year, ${month} month, ${residualMonth} days`);
