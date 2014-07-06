
;var enteredIn = [];
var collectValues = function() {   
   var valEntered = this.value;
   enteredIn.push(valEntered);
   showArray(enteredIn.join(''));
};

var result = document.getElementById("result-view");
var showArray = function(numsEntered) {
  result.innerHTML = numsEntered;
};

var equals = document.getElementsByClassName("equals")
var equals = function() {
  equals.addEventListener("click", evaluateNow, false)
};

var evaluateNow = function() {
  if evalArray
   showArray(evalArray);
};

var buttons = document.getElementsByClassName('button');
  for (var i=0; i < buttons.length; i++) {
    var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};