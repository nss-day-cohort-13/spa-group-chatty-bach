
var Chatty = (function(aug) {

	var messages = [];
	var idCounter = 0;

	var outputDiv = document.getElementById("msgArea");

	function Message (string, handle, updateTime) {
		this.string = string;
		this.handle = handle;
		this.time = updateTime;
	}

	aug.addNewMessage = function (newItem) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var newMsg = new Message(newItem, `msg${idCounter}`, updateTime);
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
		if (messages.length >= 20){
			messages.shift(messages[0]);
		};
		for (var i = 0; i < messages.length; i++) {

			buildHTML += `<p id="${messages[i].handle}">${messages[i].string} ${messages[i].time} <button class="Edit">Edit</button><button class="delete">Delete</button></p>`;

		}
		outputDiv.innerHTML = buildHTML;
		for (var i = 0; i < messages.length; i++) {
			document.getElementById(`${messages[i].handle}`).addEventListener("click", Chatty.deleteMsg);
		}
	}


	return aug;

}(Chatty || {}));
