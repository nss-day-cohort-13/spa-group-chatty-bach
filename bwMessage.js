var Chatty = (function(aug){
	var messages = [];

		aug.addNewMessage = function(newItem){
				var para = document.getElementsByTagName("p");
				if(newItem === "" || newItem === " "){       //TRY TO FIX MULTIPLE SPACES
					alert("Text field cannot be empty");
				} else if (messages.length >= 20) {
					messages.shift(messages[0]);    //HOW CAN YOU USE THE ARRAY TO BUILD THE DOM
					msgArea.removeChild(para[0]);
					messages.push(newItem);
					msgArea.innerHTML
									  += "<p>" +
									  newItem +
									  " <button type='button' class='delete'>Delete</button></p>";
				}else {
					messages.push(newItem);
					msgArea.innerHTML += "<p>" +
									  newItem +
									  " <button type='button' class='delete'>Delete</button></p>";
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


