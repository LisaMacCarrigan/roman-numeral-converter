# Roman Numeral Converter

#### An application that converts a user's numeric input into Roman Numerals, 08.18.2016

#### By **Lisa MacCarrigan and Samuel Peppard**

## Description

This is an application that converts a user's numeric input into Roman numerals using conditional logic.

## Specifications

#### 1. Do nothing to non-numeric (i.e. letters and special characters) input.

* Example Input: "a" or "!"
* Example Output: "Please enter a number"

#### 2. Do nothing to numbers higher than 3,999.

* Example Input: 4,000
* Example Output: "You cannot count higher than 3,999 in Roman numerals. Please re-enter a number."

#### 3. Each individual Roman numeral symbol has an absolute defined value.

* Example: 1 = I; 5 = V; 10 = X; 50 = L; 100 = C; 500 = D; 1000 = M

#### 4. The Roman numeral system separates ones, tens, hundreds and thousands, so the program takes the numeric input and identifies the closest of the seven initial Roman numeral values it falls near.

* Example Input: 99
* Example Output: XCIX - because 99 is closest to 100 (i.e. C)

#### 5. Find the difference between the input value and the closest initial value.

* Example Input: 4
* Example Output: IV - (5 - 4 = 1)

#### 6. Determine the preceding value is closest if the input's difference between the preceding and proceeding value is equal

* Example Input: 3
* Example Output: III - (Difference between 3 and 5 = 2 and difference between 3 and 1 = 2)

#### 7. Add 

* Example Input: 3
* Example Output: III - (Difference between 3 and 5 = 2 and difference between 3 and 1 = 2)

#### 6. There may not be more than three of the same characters in a row. When there are more than three of the same characters in a row, you SWITCH TO SUBTRACTION (ex: IIII for 4, you write IV (for 5 minus 1)).

A

Separate ones, tens, hundreds, and thousands. 99 is XCIX, not IC.

*








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
