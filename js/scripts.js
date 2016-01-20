var convertString = function(regularSentance) {
  return regularSentance.replace(/[^\w]/g, '');
}
var splitStringByLength = function(string, length) {
  return string.match(new RegExp('.{1,' + length + '}', 'g')).toString();
}
var squareStraightString = function(straightString) {
  // length of string
  // get as close to the square root as possible
  var columns = Math.round(Math.sqrt(straightString.length));
  console.log("Columns: " + columns);
  var rows = Math.round(straightString.length/columns);
  console.log("Rows: " + rows);
  var output = splitStringByLength(straightString, columns);
  console.log("squareStraightString output: " + output);
  return output;
}

var convertStringToCrypt = function(regularSentance) {
  return cryptSquare(squareStraightString(convertString(regularSentance))).replace(/,/g, ' ');
}

var cryptSquare = function(square) {
  // get 5 letter 'words' going top to bottom down the square
  var five = ''; // string to store output in
  square = square.split(','); // split input into array of rows
  console.log("Rows: " + square.length);

  var columns = square[0].length ; // COLUMNS
  var rows = square.length; // rows is how many elements in the array
  console.log("cryptSquare, " + columns);

  for(var outerIndex = 0; outerIndex<columns; outerIndex++) { // iterate through the desired words
    console.log("Iteration " + outerIndex);
    for(var index = 0;index<rows;index++) { // iterate through the rows

      console.log("Inside Iteration " + index + " " + square[index%square.length]);

      var character = square[index%square.length][outerIndex]; // get the next character
      if(character !== undefined) five = five + character; // check against characters that dont exist ie the last row
    }
    five = five + '';
  }
  return splitStringByLength(five, 5); // split by length into 5 characters
}

$(document).ready(function() {
  $("form").submit(function(event){
    var regularSentance = $("#cryptoInput").val();
    $(".output").text(convertStringToCrypt(regularSentance));
    event.preventDefault();
  });
  //
});
