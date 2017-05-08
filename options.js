var automode = document.getElementById("automode");
var devmode = document.getElementById("devmode");

automode.checked = localStorage.getItem("autoMode") === "true";
devmode.checked = localStorage.getItem("devMode") === "true";

automode.addEventListener("change", function () {
    localStorage.setItem("autoMode", this.checked);
});
devmode.addEventListener("change", function () {
    localStorage.setItem("devMode", this.checked);
});
