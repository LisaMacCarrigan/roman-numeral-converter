$(document).ready(function() {
// Business Logic
var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
var romanValues = [1, 5, 10, 50, 100, 500, 1000];





// User Interface Logic
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //grab user input
    var sentence = $("#userSentence").val();
    $("#translatedSentence").text("");
    toPigLatin(sentence);
  });
});
