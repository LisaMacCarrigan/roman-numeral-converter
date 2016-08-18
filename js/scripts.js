$(document).ready(function() {
// Business Logic
var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
var romanValues = [1, 5, 10, 50, 100, 500, 1000];


var toRoman = function(num) {

  // Do nothing to 0.
  // Do nothing to numbers higher than 3,999.
  if (num === 0 || num > 3999) {
    console.log("Please enter a number greater than 0 and less than 4,000");
  }
}


// User Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#converted-number").text("");
    toRoman(number);
  });
});
