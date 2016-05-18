// Grabs user text input field
var userInput = document.getElementById("userInput");
// Listens for keyup; runs function to validate for return key
userInput.addEventListener("keyup", validateKeyup);
// Grabs dark theme checkbox
var darkTheme = document.getElementById("darkTheme");
// Listens for change; runs function to add/remove dark theme class
darkTheme.addEventListener("change", toggleDark);
// Grabs large text checkbox
var largeText = document.getElementById("largeText");
// Listens for change; runs function to add/remove large text class
largeText.addEventListener("change", toggleLarge);
// Grabs submit button
var buttonSubmit = document.getElementById("submit");
// Listens for click; runs function to begin the process of creating a new message
buttonSubmit.addEventListener("click", msgSubmit);
// Grabs clear button
var buttonClearAll = document.getElementById("clear");
// Listens for click; calls Chatty.deleteAll()
buttonClearAll.addEventListener("click", Chatty.deleteAll);

// Main content elements
// Grabs the output div where all messages appear
var msgArea = document.getElementById("msgArea");
// Listens for click; runs function that calls Chatty.deleteMsg or editMsg and passes in event.target
msgArea.addEventListener("click", Chatty.deleteMsg);
msgArea.addEventListener("click", editMsg);

// All variables below are defined for the purpose of toggling light/dark classes
var headerDiv = document.getElementById("navBar");
var logoDiv = document.getElementById("logo");
var h1Text = document.getElementsByTagName("h1");
var h2Text = document.getElementsByTagName("h2");
var mainContent = document.getElementById("main-content");
var contentWrap = document.getElementById("wrapper");

// Functions

// validateKeyup() - Callback from userInput
function validateKeyup(key) {
	if (key.which === 13) {
		msgSubmit();
	}
}

// toggleDark() - Callback from darkTheme
// When the dark theme checkbox changes checked/unchecked,
// the page's content wrapper toggles the class for dark theme
function toggleDark() {
	mainContent.classList.toggle("dark-bg");
	headerDiv.classList.toggle("dark-h-bg");
	logoDiv.classList.toggle("dark-bg");
	h1Text[0].classList.toggle("dark-h-text");
	h2Text[0].classList.toggle("dark-h-text");
	msgArea.classList.toggle("dark-msg-area");
	var messageClasses = document.getElementsByClassName("message");
	for (var i = 0; i < messageClasses.length; i++) {
		messageClasses[i].classList.toggle("dark-bg");
	}
}

// toggleLarge() - Callback from largeText
// When the large text checkbox changes checked/unchecked,
// the page's content wrapper toggles the class for large text
function toggleLarge() {
	contentWrap.classList.toggle("large");
}

var edit= false;
// msgSubmit() - Callback from buttonSubmit
// When the submit button is clicked (or a return keypress is heard),
// the value of the text input is passed into Chatty.addNewMessage()
function msgSubmit() {
	var pattern = userInput.value.trim();
	if( pattern === "") {
		alert("Text field cannot be empty");
	} else if (edit===true){
		var editMsg=document.getElementById(id);
		var index=id.charAt(3);
		console.log(index);
		Chatty.editMessage(userInput.value, id, index, person.innerText);
		userInput.value = "";
		edit=false;
	} else {
		var rButton = document.querySelectorAll(".rButton");
		for(var i= 0; i<rButton.length; i++) {
			if (rButton[i].checked) {
				var selected = rButton[i].value;
			}
		}
		Chatty.addNewMessage(userInput.value, selected);
		userInput.value = "";
		buttonClearAll.disabled = false;
	}
}
var messageToEdit;
var person
function editMsg() {
	edit= true;
	messageToEdit=event.target.parentNode;
	id=messageToEdit.id;
	var userMessage=messageToEdit.querySelector("label");
	person = messageToEdit.querySelector(".strong");
	console.log(person.innerText);
	console.log(messageToEdit);
	console.log(id);
	if(event.target.className=== "edit") {
		userInput.focus();
		userInput.value= userMessage.innerHTML;
	}
}

// Custom Theme JS

var changeBCG = document.getElementById("changeBackground");
var changeFont = document.getElementById("changeFont");
var save = document.getElementById("saveTheme")
save.addEventListener("click", changeTheme);

function changeTheme () {
  var newBCG = changeBCG.value;
  var newFont = changeFont.value;
  msgArea.setAttribute("style", `background-color:${newBCG}; color:${newFont}`);
}