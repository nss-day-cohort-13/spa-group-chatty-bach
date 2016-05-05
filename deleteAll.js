var Chatty = (function (aug) {

  aug.deleteMsg = function (clickEvent) {
    console.log("clickEvent: ", clickEvent);
    if (clickEvent.target.tagName === "BUTTON") {
      Chatty.deleteData(clickEvent.currentTarget.id);
    }
  }

  aug.deleteAll = function () {
    var messages = Chatty.getMessages();
    for (var i = 0; i < messages.length; i++) {
      var idDelete = messages[i].handle
      Chatty.deleteData(idDelete);
    }
    buttonClearAll.disabled = true;
  }

  return aug;

}(Chatty || {}));
