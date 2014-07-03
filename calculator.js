
var enteredIn = [];

var collectValues = function() {   
   var valEntered = this.value;
   enteredIn.push(valEntered);
   console.log(enteredIn);
};


var buttons = document.getElementsByClassName('button');

for (var i=0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};