function contentToggle(contentId){
	var content = document.getElementById(contentId);

	if (content.style.display === "none"){
		content.style.display = "block";
	}
	else{
		content.style.display = "none";
	}
}

function hideContent(){
	var i, subContents;
	subContents = document.getElementsByClassName("subContent");
	
	//hide all content dropdowns
	for(i = 0; i < subContents.length; i++){
		subContents[i].style.display = "none";
	}
}

$(document).ready(hideContent());