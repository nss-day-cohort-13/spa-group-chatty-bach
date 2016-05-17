'use strict';
// DOM handlers

	// Header elements
		 var userInput = $("#userInput");	// Grabs user text input field
		 userInput.keyup(validateKeyup);		// Listens for keyup; runs function to validate for return key

		 var darkTheme = $("#darkTheme");	// Grabs dark theme checkbox
		 darkTheme.change(toggleDark);			// Listens for change; runs function to add/remove dark theme class

		 var largeText = $("#largeText");	// Grabs large text checkbox
		 largeText.change(toggleLarge);			// Listens for change; runs function to add/remove large text class

		 var buttonSubmit = $("#submit");	// Grabs submit button
		 buttonSubmit.click(msgSubmit);			// Listens for click; runs function to begin the process of creating a new message

		 var buttonClearAll = $("#clear");				// Grabs clear button
		 buttonClearAll.click(Chatty.deleteAll);	// Listens for click; calls Chatty.deleteAll()

	// Main content elements
		 var msgArea = $("#msgArea");			// Grabs the output div where all messages appear
		 // msgArea.click(Chatty.deleteMsg);		// Listens for click; runs function that calls Chatty.deleteMsg and passes in event.target
		 // msgArea.click(editMsg);

		 // All variables below are defined for the purpose of toggling light/dark classes
		 var headerDiv = $("#navBar");
		 var logoDiv = $("#logo");
		 var h1Text = $("h1");
		 var h2Text = $("h2");
		 var mainContent = $("#main-content");
		 var contentWrap = $("#wrapper");

// Functions

	// validateKeyup() - Callback from userInput
		// When any keypress is heard in the user text input,
		// this function checks to see if the key was "return/enter".
		// If "return", it runs msgSubmit().
		 function validateKeyup(key) {
		 		if (key.which === 13) {
		 			msgSubmit();
		 		}
		 }

 	// toggleDark() - Callback from darkTheme
 		// When the dark theme checkbox changes checked/unchecked,
 		// the page's content wrapper toggles the class for dark theme
 			function toggleDark() {
 				mainContent.toggleClass("dark-bg");
 				headerDiv.toggleClass("dark-h-bg");
 				logoDiv.toggleClass("dark-bg");
 				h1Text.toggleClass("dark-h-text");
 				h2Text.toggleClass("dark-h-text");
 				msgArea.toggleClass("dark-msg-area");
 				var messageClasses = $(".message");
 				messageClasses.toggleClass("dark-bg")
 				messageClasses.children("button").css("color", "black");
 			}

  // toggleLarge() - Callback from largeText
  	// When the large text checkbox changes checked/unchecked,
  	// the page's content wrapper toggles the class for large text
  		function toggleLarge() {
  			contentWrap.toggleClass("large");
  		}
var edit= false;
	// msgSubmit() - Callback from buttonSubmit
		// When the submit button is clicked (or a return keypress is heard),
		// the value of the text input is passed into Chatty.addNewMessage()
function msgSubmit() {
	userInput = $("#userInput");
	var pattern = $.trim(userInput.val());
	// if(messages === []){
	// 	buttonClearAll.attr("disabled", "true");
	// };
	if( pattern === "") {
		alert("Text field cannot be empty");
		userInput.val("");
	} else if (edit===true){
		var editMsg= $(".edit");
		Chatty.editMessage(userInput.val(), id);
		userInput.val("");
		edit=false;

	} else {
			var rButton = $(".rButton");
			for (var i = 0; i < rButton.length; i++) {
				if (rButton[i].checked) {
					var selected = rButton[i].value;
				}
			}
			Chatty.addNewMessage(userInput.val(), selected);
			userInput.val("");
			buttonClearAll.attr("disabled", "false");
	}
}
var id;

function editMsg() {
if(event.target.className === "edit")
	edit= true;
	id=event.target.parentElement.id;
	console.log("edit", event.target.parentElement.id);
	var userMessage=$(this).children("label").html();
	$("#userInput").focus();
	$("#userInput").val(userMessage);
}


// Custom Theme JS

var changeBCG = $("#changeBackground").val();
var changeFont = $("#changeFont").val();
var save = $("#saveTheme");
save.click(changeTheme);

function changeTheme () {
  msgArea.attr("style", `background-color:${changeBCG}; color:${changeFont}`);
};
