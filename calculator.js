
var enteredIn = [];
var collectValues = function() {   
   var valEntered = this.value;
   enteredIn.push(valEntered);
   evalArray(enteredIn);
};

var result = document.getElementById("result-view");
var evalArray = function(numsEntered) {
  result.innerHTML = numsEntered;
};

var buttons = document.getElementsByClassName('button');
  for (var i=0; i < buttons.length; i++) {
    var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};