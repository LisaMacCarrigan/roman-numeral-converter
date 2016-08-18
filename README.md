# Roman Numeral Converter

#### An application that converts a user's numeric input into Roman Numerals, 08.18.2016

#### By **Lisa MacCarrigan and Samuel Peppard**

## Description

This is an application that converts a user's numeric input into Roman numerals using conditional logic.

The Roman numeral system separates ones, tenths, hundredths, and thousandths, so the program approaches inputted numbers similarly.

## Specifications

#### 1. Do nothing to non-numeric (i.e. letters and special characters) input.

* Example Input: "a" or "!"
* Example Output: "Please enter a number"

#### 2. Do nothing to 0.

* Example Input: 0
* Example Output: "Please enter a number greater than 0"

#### 3. Do nothing to numbers higher than 3,999.

* Example Input: 4,000
* Example Output: "You cannot count higher than 3,999 in Roman numerals. Please re-enter a number."

#### 4. Each individual Roman numeral symbol has an absolute defined value.

* Example: 1 = I; 5 = V; 10 = X; 50 = L; 100 = C; 500 = D; 1000 = M

#### 5. Add the value of all the symbols to get the desired input number.

* Example Input: 2
* Example Output: II

#### 6. If more than three of the same Roman numeral symbol are needed, then find the difference between the input value and the closest proceeding Roman numeral value. When there are more than three of the same roman numeral symbol in a row, subtract added initial Roman symbols and add proceeding Roman symbol instead

* Example Input #1: 4
* Example Output #1: IV - (5 - 4 = 1)
* Example Input #2: 9
* Example Output #2: IX - (10 - 9 = 1)

#### 7. Determine the preceding value is closest if the input's difference between the preceding and proceeding value is equal. When this occurs, use preceding Roman numeral symbol.

* Example Input: 3
* Example Output: III - (Difference between 3 and 5 = 2 and difference between 3 and 1 = 2)

#### 8. Deal with addition, like when you have the number 6 or 7.

* Example Input #1: 6
* Example Output #1: VI
* Example Input #2: 7
* Example Output #2: VII

## Setup/Installation Requirements

* Clone this repository
* If editing, open project directory in Code Editor of choice
* If viewing, open index.html in a web browser

## Known Bugs

No known bugs.

## Support and contact details

For comments or questions, please email Lisa.MacCarrigan@gmail.com or sampeppard@gmail.com

## Technologies Used

HTML
CSS
JavaScript
jQuery version 3.1.0.
Bootstrap version 3.3.7.

### License

*This application is licensed under the MIT license*

Copyright (c) 2016 **Lisa MacCarrigan and Samuel Peppard**
