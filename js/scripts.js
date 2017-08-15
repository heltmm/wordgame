$(document).ready(function(){
  $("#wurd").submit(function(event){
    event.preventDefault();
    var quote = $("#userInput").val().split("");

    for (i=0; i<quote.length; i++){
      if (quote[i] === "a" || quote[i] === "e" || quote[i] === "i" || quote[i] === "o" || quote[i] === "u" ){
        quote[i] = "-";
      }
    }
    quote = quote.join("")
    $("#userOutput").append(quote)
  });
});
