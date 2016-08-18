$(document).ready(function() {
// Business Logic
var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
var romanValues = [1, 5, 10, 50, 100, 500, 1000];

var toRoman = function(number) {
  

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
