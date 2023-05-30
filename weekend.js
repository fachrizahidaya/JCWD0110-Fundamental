const checkWeekend = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  day === 0 || day === 6
    ? console.log("It's weekend")
    : console.log("Just weekday");
};

checkWeekend("2023-05-27");
