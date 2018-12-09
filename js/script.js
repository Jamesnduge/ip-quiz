      //==== Business logic====//

$(document).ready(function() {

  $("form#formOne").submit(function(event){
  var qN1 = $("input:radio[name=language]:checked").val();
  var qN2 = $("input:radio[name=block]:checked").val();
  var qN3 = $("input:radio[name=jquery]:checked").val();
  var qN4 = $("input:radio[name=inline]:checked").val();
  var qN5 = $("input:radio[name=github]:checked").val();
  var qN6 = $("input:radio[name=type]:checked").val();

  var youScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4)+parseInt(qN5)+parseInt(qN6);
  $("#youScore").text("HEY THERE! HERE IS WHAT YOU SCORED: " + youScore + " marks out of a possible 96 marks");

      //==== User Interface ====//

  $("form#formOne").slideUp(1250);
  $("#youScore").show(500000);
  $("form#formOne").slideDown();
    event.preventDefault();
   });

});
