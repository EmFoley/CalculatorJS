
var collectValues = function() {
   var enteredIn = [];
   var valEntered = this.val;
   debugger
   // enteredIn.push(valEntered);
   console.log(valEntered);
};

var keys = document.getElementById('keys');
var buttons = keys.childNodes;

for (var i=0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};