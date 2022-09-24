// Cafe Manet JavaScript Document
// Author: Jericho Nasser
// Email: Jerichonasser@yahoo.com
// ______________________________________________


'use strict';

console.log("Manet.js initiated!");

// Constructors
// ...to do
// ______________________________________________

// Method: getMenuData
// Function: Gets and sets menu data from excel worksheet
function getMenuData() {
    // to do
    console.log("Menu Data Streaming");
}
// ______________________________________________

// Method: getEmployeeApplicationData
// Function: Recieve and organize employee application data
// Questions:
//      Run a live server to hold files
//      Parse data [hierachical structure]


const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

const file_reader = new FileReader();

formData.append('name', 'email', fileField.files[0]);

const request = new Request("Cafe Manet Website/Cafe Manet/Forms", {
    method: 'POST',
    body: formData
});

function getEmployeeApplicationData() {
    // to do
    console.log("Application data streaming");
    
}

// ______________________________________________

// Method: navOnResize()
// Function: display and hide nav menu with contingent @document size query
const navigation = document.getElementsByTagName("nav");
const nav_list = document.getElementById("navlist");
const nav_button = document.getElementById("nav-button");
const xout_nav_button = document.getElementById("x-out");

nav_button.addEventListener("click", displayNav);
xout_nav_button.addEventListener("click", hideNav);

// in question
// document.body.addEventListener("resize", resizedAboveThreshold);

// function resizedAboveThreshold() {
//     if (document.body.width > 826) {
//         nav_list.style = "display: flex";
//     }
// }

function displayNav() {
    // nav list needs 2em padding and nav needs to inherit the full vertical height value
    // navigation.style = "height: 100vh";
    nav_list.style = "display: flex";
    nav_button.style = "display: none";
    xout_nav_button.style = "display:block";
}
function hideNav() {
    //while (document.width < 826) {}
    nav_list.style = "display: none";
    nav_button.style = "display: block";
    xout_nav_button.style = "display:none";
}

