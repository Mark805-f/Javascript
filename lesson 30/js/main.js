const clockDisplay = document.getElementById('clock-display');
const ctimeImage = document.getElementById('timeImage');
const wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
const dsUpTimeSelector = document.getElementById('dsUpTimeSelector');
const sleepUpTimeSelector = document.getElementById('sleepUpTimeSelector');
const saveButton = document.getElementById('saveButton');

let wakeUpTime = 8;
let dsTime =16;
let sleepTime = 23;
let timesAreSaved = false;