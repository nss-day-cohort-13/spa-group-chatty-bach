'use strict';
var Chatty= (function(xhr){

	var jsonMessages= [];

	$.ajax({
    url:"messages.json"
  }).done(fetchMsg);

	function fetchMsg (jsonContents) {
		for (var i = 0; i < jsonContents.messages.length; i++) {
			jsonMessages.push(jsonContents.messages);
			Chatty.addNewMessage(jsonContents.messages[i].message,jsonContents.messages[i].user);
			// console.log(jsonContents.messages);
		}
	}

	xhr.getJson= function () {
		return jsonMessages;
	};

	return xhr;

}(Chatty || {}));

