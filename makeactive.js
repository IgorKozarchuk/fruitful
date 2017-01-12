// Make menu link active onclick

var selector = ".menu li a";
var elements = document.querySelectorAll(selector);

function makeActive(e, link) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove("active");
	}
	this.classList.add("active");
}

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", makeActive);
}