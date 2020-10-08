/*
  JS code to handle the fieldset transitions with html buttons.
   
   Author: Aiden Eyre
   Date:   27 September 2020
   
   Filename: code.js
*/

this.clicked = "aboutMeSection"; // Placeholder of current fieldset.

// I add window.onload so that the DOM can fully load before executing.
window.onload = function () {
  // Set up event listener for each fieldset button.
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

  // Function to change css styles to show a feildset transition.
  var transitions = function (clickedButton) {
    document.getElementById(this.clicked).style.display = "none";
    document.getElementById(clickedButton).style.display = "flex";
    this.clicked = clickedButton;
  };
};
