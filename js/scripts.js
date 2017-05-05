//Business Logic

//Return different outputs
var numberInput = function(userInput) {
  var output;

  //return userInput;

  output = range(userInput);
  output = convertFifteen(output);
  output = convertThrees(output);
  output = convertFives(output);

  return output;
};

// Count up to the userInput number

var range = function(userInput) {
  var result = [];
  for (var index = 1; index <= userInput; index+= 1) {
    result.push(index);
  }
  return result;
};

//Replace numbers divisible by 3 with "ping"

var convertThrees = function(userInput)
{
  var result = userInput.map(function(index)
  {
    if ((index) % 3 === 0)
    {
      return "ping";
    }
    return index;
  })
  return result;
};

// Replace numbers divisible by 5 with "pong"

var convertFives = function(userInput)
{
  var result = userInput.map(function(index)
  {
    if ((index) % 5 === 0)
    {
      return "pong";
    }
    return index;
  })
  return result;
};

// Replace numbers divisible by 15 with "ping-pong"

var convertFifteen = function(userInput)
{
  var result = userInput.map(function(index)
  {
    if ((index) % 15 === 0)
    {
      return "ping-pong";
    }
    return index;
  })
  return result;
};
//If userInput is divisible by 3, return ping, if not, return userInput
//If userInput is divisible by 5, return pong, if not, return userInput
//if userInput is divisible by 15, return ping-pong, if not, return userInput

// var numberInput = function(userInput) {
//   if (userInput % 15 === 0) {
//     return("ping-pong");
//   } else if (userInput % 5 === 0) {
//     return ("pong");
//   } else if (userInput % 3 === 0) {
//     return ("ping");
//   } else {
//     return userInput;
//   }
// };


//User Interface Logic

$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number").val());
    var result = numberInput(userInput);

    $("#output").text(result);
  });
});
