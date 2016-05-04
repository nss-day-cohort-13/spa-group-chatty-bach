var Chatty= (function(xhr){
	var jsonMessages= []; //or other array name that the parse is being pushed to
	var loadJson = new XMLHttpRequest();
	loadJson.addEventListener("load", fetchMsg);
	loadJson.open("GET", "messages.json");
	loadJson.send();

	function fetchMsg () {
		var data= JSON.parse(this.responseText);

		for (i=0; i<data.messages.length; i++) {
			jsonMessages.push(data.messages[i]);
		}
		console.log("json messages: ", jsonMessages);
		Chatty.addMessages(jsonMessages);
	}

	xhr.getJson= function () {
		return jsonMessages
	}
	return xhr
}(Chatty || {}));

