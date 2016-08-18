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
    else {

      var numComp1 = romanValues[0] - num;
      var numComp5 = romanValues[1] - num;
      var numComp10 = romanValues[2] - num;
      var numComp50 = romanValues[3] - num;
      var numComp100 = romanValues[4] - num;
      var numComp500 = romanValues[5] - num;
      var numComp1000 = romanValues[6] - num;

      // Each individual Roman numeral symbol has an absolute defined value.
      for (var i = 0; i < romanValues.length; i++) {
        if (num === romanValues[i]) {
          console.log(romanSymbols[i]);
        }
        else if (num >= romanValues[0] && num <= romanValues[1]) {
          console.log(numComp5);
        }
      }

      var numComp1 = romanValues[0] - num;
      var numComp5 = romanValues[1] - num;
      var numComp10 = romanValues[2] - num;
      var numComp50 = romanValues[3] - num;
      var numComp100 = romanValues[4] - num;
      var numComp500 = romanValues[5] - num;
      var numComp1000 = romanValues[6] - num;

      var numCompsArr = [numComp1, numComp5, numComp10, numComp50, numComp100, numComp500, numComp1000];
      numCompsArr.sort();
      console.log(numCompsArr);

  }
}


// User Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#converted-number").text("");
    toRoman(number);
    //$("#converted-number").text(toString(number));
  });
});
