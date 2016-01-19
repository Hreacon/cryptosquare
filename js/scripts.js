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
  var square = [];
  var sIndex = 0;
  var output = splitStringByLength(straightString, columns);
  console.log("squareStraightString output: " + output);
  return output;
}

var cryptSquare = function(square) {
  // get 5 letter 'words' going top to bottom down the square
  var five = [];
  square = square.split(',');
  console.log("Columns: " + square.length);
  var upperBarrier = square.join('').length/5 -1;
  console.log("cryptSquare, " + upperBarrier);
  for(var up = 0;up<upperBarrier;up++) {
    console.log("Iteration " + up);
    for(var index = 0;index<square.length;index++) {
      console.log("Inside Iteration " + index + " " + square[index%square.length]);
      var squa = square[index%square.length][up];
      if(squa !== undefined) five = five + squa;
    }
    five = five + '';
  }
  return splitStringByLength(five, 5);
}

$(document).ready(function() {
  $("form").submit(function(event){
    var regularSentance = $("#cryptoInput").val();
    $(".output").text(cryptSquare(squareStraightString(convertString(regularSentance))));
    event.preventDefault();
  });
  //
});
