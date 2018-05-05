$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 4000,
    max: 150000,
    step: 500,
    values: [ 4000, 150000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "De " + ui.values[ 0 ] + " à " + ui.values[ 1 ] +"DT").css("color","#082c49");
    }
  });
  $( "#amount" ).val( "De " + $( "#slider-range" ).slider( "values", 0 ) +
    " à " + $( "#slider-range" ).slider( "values", 1 )+"DT" );

  /*
  $("#slide-range").click(function(){
      $("#amount").css("color","#082c49");
  });
  */

} );
