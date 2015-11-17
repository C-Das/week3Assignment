/* Declare all variables */

var clickImages = document.getElementsByTagName("img");
var secondsCount = 0;
var addClick = 0;
var timerInterval;
var toggleBtn = document.getElementById("toggleBtn");

/* Add event listener on Image Click & Button Click */

for (i=0; i < clickImages.length; i++) {
    clickImages[i].addEventListener("click",addClickCounter);
}
toggleBtn.addEventListener("click",toggleTime);

/* Set timeout if user clicked "Start" and has not clicked anything for 5 seconds */
setTimeout(function() {
  if(secondsCount === 0) {
    clearInterval(timerInterval);
    toggleBtn.parentNode.removeChild(toggleBtn);
    alert("You are Slow. Refresh to start again!!");
  }
}, 5000);


/* Another timeout to stop the clock after 20 seconds */
function addSeconds () {
  secondsCount++;
  if (secondsCount === 20) {
    clearInterval(timerInterval);
    toggleBtn.parentNode.removeChild(toggleBtn);
    alert("20 seconds time is over and you have clicked : "+ addClick + "pictures. Refresh to start again!!");
  }
}
function toggleTime() {
  if(this.getAttribute("data-state") === "start") {
    this.innerHTML = "Stop";
    this.setAttribute("data-state", "stop");
    secondsCount = 0;
    timerInterval = setInterval(addSeconds, 1000);
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    addClick = 0; // Initialized the add counter
    alert("That lasted " + secondsCount + " seconds");
  }
}

// Add number of clicks on the Impage
//this.setAttribute("onclick", "disable");
// this.disable='true';
//this.onclick = "null"; // Added to make the disable the image click to get unique coun

function addClickCounter () {
       addClick++; 
       this.onclick=null; // Added to make onclick disable the image click to get unique count
    console.log ("You have clicked this many times :" +addClick);
}


