var Chatty= (function(xhr){
	var messages= []; //or other array name that the parse is being pushed to
	var loadJson = new XMLHttpRequest();
	loadJson.addEventListener("load", fetchMsg);
	loadJson.open("GET", "messages.json");
	loadJson.send();

	function fetchMsg () {
		var data= JSON.parse(this.responseText);

		for (i=0; i<data.messages.length; i++) {
			messages.push(data.messages[i]);
		}
		console.log(messages);
	}

	xhr.getJson= function () {
		return messages
}
return xhr
}(Chatty || {}));

