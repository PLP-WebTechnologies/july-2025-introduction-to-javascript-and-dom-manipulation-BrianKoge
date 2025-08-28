/* ===============================
   Part 1: Variables & Conditionals (Interactive)
   =============================== */
function checkLevel(martialArt) {
  let level = prompt("Enter your " + martialArt + " level (number):");

  if (level === null || level.trim() === "") {
    alert("You cancelled or entered nothing.");
    return;
  }

  level = parseInt(level);

  if (isNaN(level)) {
    alert("Please enter a valid number.");
    return;
  }

  if (level > 3) {
    alert(martialArt + " You are advanced.");
  } else {
    alert(martialArt + " You are beginner/intermediate.");
  }
}


/* ===============================
   Part 2: Functions
   =============================== */

// Function 1: Greeting user input
function greetUser() {
  let name = prompt("Enter your name:");
  if (name) {
    document.getElementById("output").innerText =
      "Welcome to Martial Arts Training, " + name + "!";
  }
}

// Function 2: Toggle highlight class
function toggleHighlight() {
  let tkd = document.getElementById("taekwondo-text");
  let karate = document.getElementById("karate-text");
  tkd.classList.toggle("highlight");
  karate.classList.toggle("highlight");
}

/* ===============================
   Part 3: Loops
   =============================== */

// Example 1: For loop to show training steps
function showTrainingSteps() {
  let steps = ["Warm-up", "Stretch", "Punch practice", "Kick practice", "Cool down"];
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Training Steps:</h3>";

  // For loop
  for (let i = 0; i < steps.length; i++) {
    outputDiv.innerHTML += (i + 1) + ". " + steps[i] + "<br>";
  }

  // While loop countdown
  let count = 5;
  outputDiv.innerHTML += "<br><strong>Countdown to training start:</strong><br>";
  while (count > 0) {
    outputDiv.innerHTML += count + "... ";
    count--;
  }
}

/* ===============================
   Part 4: DOM Interactions
   =============================== */
// 1. Changing text dynamically
document.getElementById("taekwondo-text").onclick = function () {
  this.innerText = "Taekwondo focuses on speed, power, and high kicks!";
};

// 2. Listening to button clicks
document.getElementById("btn-greet").addEventListener("click", greetUser);
document.getElementById("btn-toggle").addEventListener("click", toggleHighlight);
document.getElementById("btn-loops").addEventListener("click", showTrainingSteps);

// 3. Creating element dynamically
let footer = document.querySelector("footer");
let note = document.createElement("p");
note.innerText = "This page demonstrates JavaScript basics.";
footer.appendChild(note);
