
var collectValues = function() {
   var enteredIn = [];
   var valEntered = this.value;
   enteredIn.push(valEntered);
   console.log(valEntered);
};


var buttons = document.getElementsByClassName('button');

for (var i=0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};