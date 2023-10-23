// declaring the variables and linking them to their HTML elements
const hourE1 = document.getElementById('hours');
const minuteE1 = document.getElementById('minutes');
const secondE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');

function updateClock(){
    // declaring the variables within the function and assigning their values
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // declaring the ampm variable and setting its condition with a ternary operator
    let ampm = h >= 12 ? "PM" : "AM";

    // setting the condition to add a zero before the hours digit from 13:00 to 21:00
    if (h >= 13 && h < 22){
        h = `0 ${h - 12}`;
    }
    // setting the condition to add a zero before the hours digit from 00:00 to 11:00
    else if (h < 10) {
        h = `0 ${h}`;
    }
    //adding a zero before the minutes digit from 0 to 9
   m = m < 10 ? "0" + m : m;
   //adding a zero before the seconds digit from 0 to 9
   s = s < 10 ? "0" + s : s;

    // setting the timeout value to 1 second so we see each second change on the screen
    setTimeout(() => {
        updateClock();
    }, 1000)

    // assigning the values to their HTML elements
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
}

// calling the function
updateClock();
