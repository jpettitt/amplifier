var devmode = document.getElementById("devmode");

devmode.checked = (localStorage["devMode"] == "true"); // local storage stringifies things

devmode.addEventListener("change", function() {
	localStorage["devMode"] = this.checked;
});
