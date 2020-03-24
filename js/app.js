sessionStorage.removeItem("pause")
if (!localStorage.getItem("url")) {
	// do nothing
} else {
	document.getElementById("url").value = localStorage.getItem("url");
}

function openC() {
	var url = document.getElementById("url").value;
	localStorage.setItem("url", url);
	if (url.includes("/out.jpg")) {
		var nUrl = url.replace("/out.jpg", "");
		localStorage.setItem("url", nUrl);
		var url = localStorage.getItem("url");
	}
	document.getElementById("viewer").style.display = "";
	document.getElementById("base").src = url + "/out.jpg"
	setInterval(refresh, 2000);
}

function refresh() {
	if (!sessionStorage.getItem("pause")) {
		document.getElementById("base").src = localStorage.getItem("url") + "/out.jpg?r=" + new Date();
	}
}

function togg() {
	if (document.getElementById("pp").innerHTML == "Pause") {
		sessionStorage.setItem("pause", "y");
		document.getElementById("pp").innerHTML = "Play"
	} else {
		sessionStorage.removeItem("pause");
		document.getElementById("pp").innerHTML = "Pause"
	}
}