var Chatty = (function (aug) {

  aug.deleteMsg = function (clickEvent) {

   var userDelete = document.getElementsByClassName("delete");

    for (var i = 0; i < userDelete.length; i++) {

      if (clickEvent.target === userDelete[i]) {
        msgArea.removeChild(event.target.parentNode);
        Chatty.deleteData(i, 1);
      }
    }
  }

  aug.deleteAll = function () {
    var msgLength = Chatty.getMessages().length;
    console.log("message length pre splice", msgLength);
    msgArea.innerHTML = "";
    Chatty.deleteData(0, msgLength);
  }

  return aug;

}(Chatty || {}));
