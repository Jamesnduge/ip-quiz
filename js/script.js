/*  ====================Business logic=====================*/

$(document).ready(function() {

  $("form#form1").submit(function(event){
  var qN1 = $("input:radio[name=language]:checked").val();
  var qN2 = $("input:radio[name=block]:checked").val();
  var qN3 = $("input:radio[name=jQuery]:checked").val();
  var qN4 = $("input:radio[name=inline]:checked").val();
  var qN5 = $("input:radio[name=github]:checked").val();
  var qN6 = $("input:radio[name=dType]:checked").val();

  var youScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4)+parseInt(qN5)+parseInt(qN6);
  $("#youScore").text("HI THERE! HERE'S WHAT YOU SCORED: " +youScore + "%");

      //==== user Interface ====//


  $("form#form1").hide();
  $("#youScore").show();
    event.preventDefault();
   });

});
