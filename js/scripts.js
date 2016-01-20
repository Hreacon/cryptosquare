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
  var output = ''; // string to store output in
  square = square.split(','); // split input into array of rows
  console.log("Rows: " + square.length);

  var columns = square[0].length ; // COLUMNS
  var rows = square.length; // rows is how many elements in the array
  console.log("cryptSquare, " + columns);

  for(var currentColumn = 0; currentColumn<columns; currentColumn++) { // iterate through the columns
    console.log("Column iteration " + currentColumn);
    for(var currentRow = 0;currentRow<rows;currentRow++) { // iterate through the rows

      console.log("Row iteration " + currentRow + ", whole row: " + square[currentRow%square.length]);

      var character = square[currentRow][currentColumn]; // get the next character
      if(character !== undefined) // check against characters that dont exist ie the last row
        output += character; // add the character to the output string
      console.log("Row Output: " + character);
    }
  }
  return splitStringByLength(output, 5); // split by length into 5 characters
}

$(document).ready(function() {
  $("form").submit(function(event){
    var regularSentance = $("#cryptoInput").val();
    $(".output").text(convertStringToCrypt(regularSentance));
    event.preventDefault();
  });
  //
});
