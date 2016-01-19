var convertString = function(regularSentance) {
  return regularSentance.replace(/[^\w]/g, '');
}

var squareStraightString = function(straightString) {
  // length of string
  // get as close to the square root as possible
  var columns = Math.round(Math.sqrt(straightString.length));
  var rows = Math.round(straightString.length/columns);
  var square = [];
  var sIndex = 0;

  return straightString.match(new RegExp('.{1,' + columns + '}', 'g')).toString();
}

$(document).ready(function() {
  // r$("body").text(squareStraightString(convertString("this, is, fifteen behavior test!!!")));
});
