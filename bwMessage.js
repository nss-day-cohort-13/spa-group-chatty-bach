var Chatty = (function(aug){
	var messages = [];

		aug.addNewMessage = function(newItem){
			// for (var i = 0; i < newItem.length; i++) {
				if(newItem === "" || newItem === " "){
					alert("Text field cannot be empty");
				} else {
				messages.push(newItem);
				msgArea.innerHTML += "<p>" + newItem + " <button type='button' class='delete'>Delete</button></p>";
				};

		};

		aug.getMessages = function() {
			return messages;
		}

		aug.deleteData = function(ex, span) {
			messages.splice(ex, span);
		}

	return aug;
}(Chatty || {}));


