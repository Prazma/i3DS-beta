//a basic function to make screens fit
var topScreen = document.getElementById("topScreen");
var bottomScreen = document.getElementById("bottomScreen");
window.onload = function () {
    topScreen.style.height = window.innerHeight * 0.3 + "px";
    topScreen.style.width = window.innerWidth * 0.9 + "px";
    bottomScreen.style.height = window.innerHeight * 0.3 + "px";
    bottomScreen.style.width = window.innerWidth * 0.9 + "px";
}
window.onresize = function () {
    topScreen.style.height = window.innerHeight * 0.3 + "px";
    topScreen.style.width = window.innerWidth * 0.9 + "px";
    bottomScreen.style.height = window.innerHeight * 0.3 + "px";
    bottomScreen.style.width = window.innerWidth * 0.9 + "px";
}
//below are the scripts to handle user inputs like touch and button press
