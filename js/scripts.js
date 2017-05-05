//Business Logic

var numberInput = function(inputtedNumber) {
  return inputtedNumber;
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
