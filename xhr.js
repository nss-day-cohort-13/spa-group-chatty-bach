var Chatty= (function(xhr){
	var messages= []; //or other array name that the parse is being pushed to
	var getMessages = new XMLHttpRequest();
	getMessages.addEventListener("load", fetchMsg);
	getMessages.open("GET", "messages.json");
	getMessages.send();

	function fetchMsg () {
		var data= JSON.parse(this.responseText);

		for (i=0; i<data.messages.length; i++) {
			messages.push(data.messages[i]);
		}
		console.log(messages);
	}

	xhr.getMessage= function () {
		return messages
}
return xhr
}(Chatty || {}));

