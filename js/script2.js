$(document).ready(function() {
// Business Logic


var toRoman = function(num) {

  var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
  var romanValOnes = ["", "I","II","III","IV","V","VI","VII","VIII","IX"];
  var romanValTens = ["", "X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanValHundreds = ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var romanValThou = ["", "M","MM","MMM","Mv"];

  // Do nothing to 0.
  // Do nothing to numbers higher than 3,999.
    if (num === 0 || num > 3999) {
      console.log("Please enter a number greater than 0 and less than 4,000");
    }
    else {
      var testNum = num.toString().split("");

      // Test Ones
      for (var i = 0; i < romanValOnes.length; i++) {
        if (testNum == i) {
          console.log(romanValOnes[i]);
        }
      }
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
