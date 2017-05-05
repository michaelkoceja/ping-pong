//Business Logic

//If userInput is divisible by 3, return ping, if not, return userInput
//If userInput is divisible by 5, return pong, if not, return userInput
var numberInput = function(userInput) {
  if (userInput % 5 === 0) {
    return ("pong");
  } else if (userInput % 3 === 0) {
    return ("ping");
  } else {
    return userInput;
  }
};



//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number").val());
    var result = numberInput(userInput);

    $("#output").text(result);
  });
});
