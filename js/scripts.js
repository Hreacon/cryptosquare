var convertString = function(regularSentance) {
  return regularSentance.replace(/[^\w]/g, '');
}
// This line could use some refracting. It seems like you are trying to return a substring, the slice or substring methods could do this in a clearer fashion, for example sting.slice(0,length)
var splitStringByLength = function(string, length) {
  return string.match(new RegExp('.{1,' + length + '}', 'g')).toString();
}

var squareStraightString = function(straightString) {
  // length of string
  // get as close to the square root as possible
// The line below does not work. Math.round will round down, you want to always round up. For example, a string of 17 will square to 4.123, your code will return a column value of 4, but a 5 by 5 cryptosquare is needed
  var columns = Math.round(Math.sqrt(straightString.length));
// I like your use of console logs to track what is happening. Good use of tools.
  console.log("Columns: " + columns);

  var rows = Math.round(straightString.length/columns);
  console.log("Rows: " + rows);
// Not sure what these variable are for, they are declared but never used
  var square = [];
  var sIndex = 0;
  var output = splitStringByLength(straightString, columns);
  console.log("squareStraightString output: " + output);
  return output;
}

var convertStringToCrypt = function(regularSentance) {
  return cryptSquare(squareStraightString(convertString(regularSentance))).replace(/,/g, ' ');
}

var cryptSquare = function(square) {
  // get 5 letter 'words' going top to bottom down the square
// Why this variable name?
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
    // var regularSentance = $("#cryptoInput").val();
    // $(".output").text(convertStringToCrypt(regularSentance));
    // I think this will work just as well as your two lines above
    $(".output").text(convertStringToCrypt($("#cryptoInput").val()));
    event.preventDefault();
  });
  //
});
