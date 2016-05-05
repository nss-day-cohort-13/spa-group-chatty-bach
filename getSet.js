
var Chatty = (function(aug) {

	var messages = [];
	var idCounter = 0;

	var outputDiv = document.getElementById("msgArea");

	function Message (string, handle) {
		this.string = string;
		this.handle = handle;
	}

	aug.addNewMessage = function (newItem) {
		var newMsg = new Message(newItem, `msg${idCounter}`);
		messages.push(newMsg);
		idCounter++;
		Chatty.loadMessages();
	}

	aug.getMessages = function () {
		return messages;
	}

	aug.deleteData = function (ex) {
		messages = messages.filter(function(message) {
			return message.handle !== ex;
		});
		Chatty.loadMessages();
}

	aug.loadMessages = function () {
		var buildHTML = "";
		for (var i = 0; i < messages.length; i++) {
			buildHTML += `<p id="${messages[i].handle}" class="message">${messages[i].string}` +
									 `<button class="delete">Delete</button></p>`;
		}
		outputDiv.innerHTML = buildHTML;
		for (var i = 0; i < messages.length; i++) {
			document.getElementById(`${messages[i].handle}`).addEventListener("click", Chatty.deleteMsg);
		}
	}

	return aug;

}(Chatty || {}));
