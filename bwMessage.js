var chatty = (function{
var messages = [];

	return {
		function addNewMessage(newItem) {
			var msgOutput = document.getElementById("msgArea");
			for (var i = 0; i < return messages.length; i++) {
				messages.push(newItem[i]);
				msgOutput.innerHTML += newItem[i];
			};
		}

		newItem.getMessages = function() {
			return messages;
		};

		function deleteMsg(arr, ex) {
	 	   for(var i = arr.length; i--;) {
        if(arr[i] === ex) {
            arr.splice(i, 1);
        }
      }
		 }
		}
	}
};


