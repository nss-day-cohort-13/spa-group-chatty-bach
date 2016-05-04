var Chatty = (function (aug) {

  aug.deleteMsg = function (clickEvent) {

   var userDelete = document.getElementsByClassName("delete");

    for (var i = 0; i < userDelete.length; i++) {

      if (clickEvent.target === userDelete[i]) {
        msgArea.removeChild(event.target.parentNode);
        Chatty.deleteData(i);
      }
    }
  }

  aug.deleteAll = function () {}

  return aug;

}(Chatty || {}));
