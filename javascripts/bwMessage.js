'use strict';
var Chatty = (function(aug){
	var messages = [];
	var updateTime = new Date();
	var para = document.getElementsByTagName("p");


		aug.addNewMessage = function(newItem, user){
			// if(newItem == "" || newItem == " "){  //ADDED REGEX & .MATCH TO MAKE ANYTING AFTER "" alert the user
			if (messages.length >= 20) {
				updateTime = new Date();
				updateTime = updateTime.toLocaleTimeString() + updateTime.toLocaleDateString();
				messages.shift(messages[0]);    //HOW CAN YOU USE THE ARRAY TO BUILD THE DOM
				msgArea.removeChild(para[0]);
				messages.push(newItem);
				msgArea.innerHTML +=
													"<p>" +
													user +
												  newItem +
												  " <button type='button' class='delete'>Delete</button> " + updateTime + "</p>";
			} else {
				messages.push(newItem);
				updateTime = new Date();
				updateTime = updateTime.toLocaleTimeString() + " " +updateTime.toLocaleDateString();
				msgArea.innerHTML +=
													"<p>" +
													user +
									 				newItem +
													 " " +
								  				updateTime +
								  				" <button type='button' class='delete'>Delete</button></p>";
				}

		};

		aug.getMessages = function() {
			return messages;
		};

		aug.deleteData = function(ex, span) {
			messages.splice(ex, span);
		};

	return aug;
}(Chatty || {}));


