var Chatty = (function(aug){
	var messages = [];

	// return {
		aug.addNewMessage = function(newItem){
			// for (var i = 0; i < newItem.length; i++) {
				messages.push(newItem);
				msgArea.innerHTML += "<p>" + newItem + "<button type='button' class='delete'>Delete</button></p>";

		};

		aug.getMessages = function() {
			return messages;
		};

		aug.deleteData = function(ex) {
			messages.splice(ex, 1);
		}

		// aug.addJson = function() {
		// 	var jsonMessages = Chatty.getJson();
		// 	for (var i = 0; i < jsonMessages.length; i++) {
		// 		messages.push(jsonMessages[i])
		// 	};

		// };



		// function deleteMsg(arr, ex) {
	 // 	   for(var i = arr.length; i--;) {
  //       if(arr[i] === ex) {
  //           arr.splice(i, 1);
  //       }
  //     }
		//  }
		// }
	// }
	return aug;
}(Chatty || {}));


