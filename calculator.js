
;var enteredIn = [];
var evalArray = [];

var collectValues = function() { 
  if (this.className = "button op") {
    console.log("op");
   }
   else {
    var valEntered = this.value;
    enteredIn.push(valEntered);
    showArray(enteredIn.join(''));
   };
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
var addUp = function() {
  plus.addEventListener("click", sendToEval, false);
};

var sendToEval = function() {
  evalArray.push(result.innerHTML)
  return evalArray;
};



var buttons = document.getElementsByClassName('button');
  for (var i=0; i < buttons.length; i++) {
    var button = buttons[i];
  button.addEventListener("click", collectValues, false);
};