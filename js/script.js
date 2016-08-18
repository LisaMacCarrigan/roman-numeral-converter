$(document).ready(function() {
// Business Logic
var toRoman = function(num) {

  var romanValOnes = ["", "I","II","III","IV","V","VI","VII","VIII","IX"];
  var romanValTens = ["", "X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanValHundreds = ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var romanValThou = ["", "M","MM","MMM","Mv"];
  var testNum = num.toString().split("");
  var romanNumeral = [];

  // Do nothing to 0.
  // Do nothing to numbers higher than 3,999.
  if (num === 0 || num > 3999) {
    alert("Please enter a number greater than 0 and less than 4,000");
  }
  else {
    // NUMBERS IN THOUSANDS
    if (testNum.length === 4) {
      romanNumeral.push(romanValThou[testNum[0]]);
      romanNumeral.push(romanValHundreds[testNum[1]]);
      romanNumeral.push(romanValTens[testNum[2]]);
      romanNumeral.push(romanValOnes[testNum[3]]);
    }
    // NUMBERS IN HUNDREDS
    else if (testNum.length === 3) {
      romanNumeral.push(romanValHundreds[testNum[0]]);
      romanNumeral.push(romanValTens[testNum[1]]);
      romanNumeral.push(romanValOnes[testNum[2]]);
    }
    // NUMBERS IN TENS
    else if (testNum.length === 2) {
      romanNumeral.push(romanValTens[testNum[0]]);
      romanNumeral.push(romanValOnes[testNum[1]]);
    }
    // NUMBERS IN ONES
    else if (testNum.length === 1) {
      romanNumeral.push(romanValOnes[testNum[0]]);
    }

    var result = romanNumeral.join("");
    console.log(result);
    return result;

  }

}

// User Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#converted-number").text("");
    var romanNumeralResult = toRoman(number);
    $("#converted-number").text(romanNumeralResult);
  });
});
