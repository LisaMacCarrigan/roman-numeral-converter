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
    var romanNumeral = [];
    var result = romanNumeral.join("");

    if (testNum.length === 4) {
      console.log(testNum.length);

      for (var m = 0; m < romanValThou.length; m++) {
        if (testNum[0] == m) {
          console.log(romanValThou[m]);
          romanNumeral.push(romanValThou[m]);
        }
      }

      for (var c = 0; c < romanValHundreds.length; c++) {
        if (testNum[1] == c) {
          romanNumeral.push(romanValHundreds[c]);
        }
      }

      for (var d = 0; d < romanValTens.length; d++) {
        if (testNum[2] == d) {
          romanNumeral.push(romanValTens[d]);
        }
      }

      for (var u = 0; u < romanValOnes.length; u++) {
        if (testNum[3] == u) {
          romanNumeral.push(romanValOnes[u]);
        }
      }

      console.log(romanNumeral);

    }
    else if (testNum.length === 3) {
      console.log(testNum.length);
      for (var i = 0; i < romanValHundreds.length; i++) {
        if (testNum[0] == i) {
          console.log(romanValHundreds[i]);

        }
      }
    }
    else if (testNum.length === 2) {
      console.log(testNum.length);
      for (var i = 0; i < romanValTens.length; i++) {
        if (testNum[0] == i) {
          console.log(romanValTens[i]);

        }
      }
    }
    else if (testNum.length === 1) {
      console.log(testNum.length);
      for (var i = 0; i < romanValOnes.length; i++) {
        if (testNum == i) {
          console.log(romanValOnes[i]);
          // num.toString();
          // num = romanValOnes[i];
          // return num;
        }
      }
    }
    else {
      console.log("Your number is too large.")
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
    //$("#converted-number").text(number);
  });
});
