
;var enteredIn = [];
var evalArray = [];
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
  equals.addEventListener("click", finalAnswer, false)
};

var finalAnswer = function() {
  if (evalArray != null) {
   showArray(evalArray)
 }
  else {
    alert("You have to enter some numbers!")
  }
};

var plus = document.getElementById("plus")
  plus.addEventListener("click", sendToEval, false);

var sendToEval = function() {
  evalArray.push(result.innerHTML)
};



var buttons = document.getElementsByClassName('button');
  for (var i=0; i < buttons.length; i++) {
    var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};