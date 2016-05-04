
// DOM handlers

	// Header elements
		 var userInput = document.getElementById("userInput");	// Grabs user text input field
		 userInput.addEventListener("keyup", validateKeyup);		// Listens for keyup; runs function to validate for return key

		 var darkTheme = document.getElementById("darkTheme");	// Grabs dark theme checkbox
		 darkTheme.addEventListener("change", toggleDark);			// Listens for change; runs function to add/remove dark theme class

		 var largeText = document.getElementById("largeText");	// Grabs large text checkbox
		 largeText.addEventListener("change", toggleLarge);			// Listens for change; runs function to add/remove large text class

		 var buttonSubmit = document.getElementById("submit");	// Grabs submit button
		 buttonSubmit.addEventListener("click", msgSubmit);			// Listens for click; runs function to begin the process of creating a new message

		 var buttonClearAll = document.getElementById("clear");				// Grabs clear button
		 // buttonClearAll.addEventListener("click", Chatty.deleteAll);		// Listens for click; calls Chatty.deleteAll()

	// Main content elements
		 var msgArea = document.getElementById("msgArea");			// Grabs the output div where all messages appear
		 msgArea.addEventListener("click", routeDelete);					// Listens for click; runs function that calls Chatty.deleteMsg and passes in event.target

		 var contentWrap = document.getElementById("wrapper");	// Grabs the content wrapper for toggling light/dark themes and regular/large text

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
 				contentWrap.classList.toggle("dark");
 			}

  // toggleLarge() - Callback from largeText
  	// When the large text checkbox changes checked/unchecked,
  	// the page's content wrapper toggles the class for large text
  		function toggleLarge() {
  			contentWrap.classList.toggle("large");
  		}

	// msgSubmit() - Callback from buttonSubmit
		// When the submit button is clicked (or a return keypress is heard),
		// the value of the text input is passed into Chatty.addNewMessage()
  		function msgSubmit() {
  			Chatty.addNewMessage(userInput.value);
  		}

	// msgDelete() - Callback from msgArea
		// When a delete button is clicked,
		// the parent message of the delete button is passed into Chatty.deleteMsg()
			function routeDelete(clickEvent) {
				Chatty.deleteMsg(clickEvent.target);
			}
