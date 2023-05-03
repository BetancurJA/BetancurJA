var dropdown = document.getElementsByTagName("li");

for (var i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {
		var submenu = this.querySelector("ul");
		if (submenu.style.display === "block") {
			submenu.style.display = "none";
		} else {
			submenu.style.display = "block";
		}
	});
}
