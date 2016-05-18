'use strict';
var Chatty = (function(aug) {

	var messages = [];
	var idCounter = 0;

	var outputDiv = $("#msgArea");

	function Message (string, handle, person, updateTime) {
		this.string = string;
		this.handle = handle;
		this.user = person;
		this.time = updateTime;
	}

	aug.addNewMessage = function (newItem, person) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var newMsg = new Message(newItem, `msg${idCounter}`, person, updateTime);
		messages.push(newMsg);
		idCounter++;
		Chatty.loadMessages();
	};

<<<<<<< HEAD:getSet.js
	aug.editMessage = function (location, editText, editId, person, index) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var editMsg = new Message(editText, editId, person, updateTime);
		messages[index]=editMsg;
=======
	aug.editMessage = function (editText, editId) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var toEdit = messages.find(function(message) {
			return message.handle === editId;
		});
		console.log("trouble", editId)
		toEdit.string = editText;
>>>>>>> master:javascripts/getSet.js
		Chatty.loadMessages();
	};

	aug.getMessages = function () {
		return messages;
	};

	aug.deleteData = function (ex) {
		messages = messages.filter(function(message) {
			return message.handle !== ex;
		});
		Chatty.loadMessages();
	};

	aug.loadMessages = function () {
		var buildHTML = "";
		if (messages.length >= 20){
			messages.shift(messages[0]);
<<<<<<< HEAD:getSet.js
		};
		for (var i = 0; i < messages.length; i++) {



			messages[i].handle = `msg${i}`; //WHEN YOU DO A DELETE NEED TO RESET HANDLES



// 			buildHTML += `<p id="${messages[i].handle}" class="message"> <span class="strong">${messages[i].user}</span>: ${messages[i].string}<button class="delete">Delete</button><span class="timeStamp">${messages[i].time}</span></p>`;
// =======

			buildHTML += `<p id="${messages[i].handle}" class="message"><span class="strong">${messages[i].user}</span><label class='userMsg>'>${messages[i].string} </label><button class="edit">Edit</button><button class="delete">Delete</button><span class="timeStamp">${messages[i].time}</span></p>`;
=======
>>>>>>> master:javascripts/getSet.js
		}
		for (var i = (messages.length - 1); i >= 0; i--) {
			buildHTML += `<p id="${messages[i].handle}" class="message strong">${messages[i].user}: <label class='userMsg'>${messages[i].string} </label><button class="edit">Edit</button><button class="delete">Delete</button><span class="timeStamp">${messages[i].time}</span></p>`;
		}
		outputDiv.html(buildHTML);
		$(".delete").each(function() {
			$(this).click(Chatty.deleteMsg);
		});
		$(".edit").each(function(){
			$(this).click(editMsg);
		});
	}


	return aug;

}(Chatty || {}));
