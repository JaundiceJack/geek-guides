function contentSelect(evt, contentName){
	// Declare all variables
	var i, content, content-link;

	// Get all elements with class="content" and set display to none to hide them
	content = document.getElementsByClassName("content"); //$(".content");
	for(i=0; i < content.length; i++){
		content-pages[i].style.display = "none";
	}

	// Get all elements with class="content-link" and remove the class "active"
	content-link = document.getElementsByClassName("content-link"); //$(".content-link");
	for(i=0; i < content-link.length; i++){
		content-link[i].className = content-link[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(contentName).style.display = "block";
	evt.currentTarget.className += " active";
}