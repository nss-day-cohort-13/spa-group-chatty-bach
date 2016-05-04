var Chatty = (function () {

   var delete = getElementsByClassName("delete")
    for (var i = 0; i < delete.length; i++)
      if (clickEvent.target === delete[i]) {
        msgArea.removeChild(event.target.parentNode);
        Chatty.getMessages();
        messages.shift(messages[i]);
      }


}(Chatty || {}));