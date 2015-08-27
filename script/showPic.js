function showPic(whichpic){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert (body_element.nodeType);
}
//window.onload = countBodyChildren;