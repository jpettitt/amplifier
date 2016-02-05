



document.getElementById("devmode").checked = (localStorage["devMode"] == "true"); // local storage stringifies things





document.getElementById("devmode").addEventListener("change",function() {
	localStorage["devMode"] = this.checked;	
});