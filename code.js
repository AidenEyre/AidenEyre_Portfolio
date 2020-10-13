/*
  JS code to handle the fieldset transitions with html buttons.
   
   Author: Aiden Eyre
   Date:   08 Octo 2020
   
   Filename: code.js
*/

this.clicked = "aboutMeSection"; // Placeholder of current div.

// I add window.onload so that the DOM can fully load before executing.
window.onload = function () {
  // Set up event listener for each div button.
  var aboutMeButton = document
    .getElementById("aboutMeButton")
    .addEventListener("click", (evt) => {
      transitions("aboutMeSection");
    });

  var projectsButton = document
    .getElementById("projectsButton")
    .addEventListener("click", (evt) => {
      transitions("projectSection");
    });

  var resumeButton = document
    .getElementById("resumeButton")
    .addEventListener("click", (evt) => {
      transitions("resumeSection");
    });

  var contactMeButton = document
    .getElementById("contactMeButton")
    .addEventListener("click", (evt) => {
      transitions("contactMeSection");
    });

  // Function to change css styles to show a div transition.
  var transitions = function (clickedButton) {
    document.getElementById(this.clicked).style.display = "none";
    document.getElementById(clickedButton).style.display = "flex";
    this.clicked = clickedButton;
  };

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Do nothing.
  } else {
    // Event handler for hover.
    var contactMeButton = document
      .getElementById("pSnakeGameLink")
      .addEventListener("mouseover", (evt) => {
        document.getElementById("s16").style.backgroundColor = "red";

        // Loop through each div at a pace of 250ms drawing the snake.
        for (let i = 1; i <= 16; i++) {
          let id = "s" + i;

          setTimeout(() => {
            document.getElementById(id).style.backgroundColor = "white";
          }, 250 * i);
        }

        // Clear the snake as it moves through.
        for (let i = 1; i <= 16; i++) {
          let id = "s" + i;
          setTimeout(() => {
            document.getElementById(id).style.backgroundColor = "";
          }, 2500 + 250 * i);
        }
      });
  }
};
