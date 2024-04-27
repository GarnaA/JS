function getWeekDay(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    return days[date.getDay()];
  }

let date = new Date(2012, 0, 3);
console.log( getWeekDay(date) ); 