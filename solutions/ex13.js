/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Split the input date into year, month, and day
  const [year, month, day] = date.split('/');

  // Convert month number to month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  // Helper function to add the correct suffix to the day
  const addSuffix = (day) => {
    const dayInt = parseInt(day, 10);
    if (dayInt > 10 && dayInt < 20) {
      return `${dayInt}th`;
    }
    switch (dayInt % 10) {
      case 1: return `${dayInt}st`;
      case 2: return `${dayInt}nd`;
      case 3: return `${dayInt}rd`;
      default: return `${dayInt}th`;
    }
  };

  // Format the human-readable date
  const dayWithSuffix = addSuffix(day);
  return `${monthName} ${dayWithSuffix}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
