
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

		 var buttonClearAll = document.getElementById("clear");	// Grabs clear button
		 buttonClearAll.addEventListener("click", msgClearAll);	// Listens for click; runs function to begin the process of clearing all messages

	// Main content elements
		 var msgArea = document.getElementById("msgArea");			// Grabs the output div where all messages appear
		 msgArea.addEventListener("click", msgDelete);					// Listens for click; runs function to check event target,
		 																														// If needed, calls method to delete

// Functions

	// validateKeyup() - Callback from userInput
		 function validateKeyup(key) {
		 		if (key.which === 13) {
		 			msgSubmit();
		 		}
		 }

 	// toggleDark() - Callback from darkTheme
 			function toggleDark() {

 			}

  // toggleLarge() - Callback from largeText
  		function toggleLarge() {

  		}

	// msgSubmit() - Callback from buttonSubmit
  		function msgSubmit() {

  		}

	// msgClearAll() - Callback from buttonClearAll
  		function msgClearAll() {

  		}

	// msgDelete() - Callback from msgArea
			function msgDelete() {

			}
