$(document).ready(function(){

   $(".error-form").hide();
   
	/** Counters **/
	jQuery('.counter-num').counterUp({
                delay: 8,
                time: 1500
        }); 
	

  var exp1=new RegExp("^[a-zA-Z0-9\ \.\:\,\"\é\è\ç\à\|\]{10,30}$","g");
  var exp2=new RegExp("^[0-9]{4,6}$","g");
  var exp3=new RegExp("^[0-9]{3,6}$","g");
  var exp4=new RegExp("^[0-9]{4}$","g");
  var exp5=new RegExp("^[a-zA-Z0-9\ \.\:\,\"\é\è\ç\à\@\_\-\|\]{100,300}$","g");

  /** Tout séléctionner button**/
  var x=0;

  $("input[type='button']").on("click",function(){
    if(x==0){
      $("input[type='checkbox']").prop("checked","checked");
      $("input[type='button']").val("Tout désélectionner");
      x+=1;
    }
    else if(x==1){
      $("input[type='checkbox']").prop("checked","");
      $("input[type='button']").val("Tout séléctionner");
      x-=1;
    }
  });

  /** Titre **/
  $("#titre").blur(function(){
	var tab=$("#titre").val().match(exp1);
		if(tab==null){
			$(".error-message-titre").show();
      $(".form-control-titre").addClass("error-msg").removeClass("valid-msg");
		}
		else{
			$(".error-message-titre").hide();
      $(".form-control-titre").addClass("valid-msg").removeClass("error-msg");
		}
	});

    /** Prix **/
    $("#prix").blur(function(){
  	var tab=$("#prix").val().match(exp2);
  		if(tab==null){
  			$(".error-message-prix").show();
        $(".form-control-prix").addClass("error-msg").removeClass("valid-msg");
  		}
  		else{
  			$(".error-message-prix").hide();
        $(".form-control-prix").addClass("valid-msg").removeClass("error-msg");
  		}
  	});

    /** Marque **/
    $("#marque").blur(function(){
        if($("#marque :selected").text()=="Choisir une marque"){
          $(".error-message-marque").show();
          $(".form-control-marque").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-marque").hide();
        $(".form-control-marque").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Modéle **/
    $("#modele").blur(function(){
        if($("#modele :selected").text()=="Choisir un modéle"){
          $(".error-message-modele").show();
          $(".form-control-modele").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-modele").hide();
        $(".form-control-modele").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Kilométrage **/
    $("#kilometrage").blur(function(){
  	var tab=$("#kilometrage").val().match(exp3);
  		if(tab==null){
  			$(".error-message-kilometrage").show();
        $(".form-control-kilometrage").addClass("error-msg").removeClass("valid-msg");
  		}
  		else{
  			$(".error-message-kilometrage").hide();
        $(".form-control-kilometrage").addClass("valid-msg").removeClass("error-msg");
  		}
  	});

    /** Mise en circulation **/
    $("#mise").blur(function(){
  	var tab=$("#mise").val().match(exp4);
  		if((tab==null) || (tab<1997) || (tab>2017)){
  			$(".error-message-mise").show();
        $(".form-control-mise").addClass("error-msg").removeClass("valid-msg");
  		}
  		else{
  			$(".error-message-mise").hide();
        $(".form-control-mise").addClass("valid-msg").removeClass("error-msg");
  		}
  	});

    /** Propriétaire **/
    $("#prop").blur(function(){
        if($("#prop :selected").text()=="Choisir le propriétaire"){
          $(".error-message-prop").show();
          $(".form-control-prop").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-prop").hide();
        $(".form-control-prop").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Carburant **/
    $("#carburant").blur(function(){
        if($("#carburant :selected").text()=="Choisir le type d'énérgie"){
          $(".error-message-carburant").show();
          $(".form-control-carburant").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-carburant").hide();
        $(".form-control-carburant").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Carburant **/
    $("#carburant").blur(function(){
        if($("#carburant :selected").text()=="Choisir le type d'énérgie"){
          $(".error-message-carburant").show();
          $(".form-control-carburant").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-carburant").hide();
        $(".form-control-carburant").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Transmission **/
    $("#transmission").blur(function(){
        if($("#transmission :selected").text()=="Choisir la transmission"){
          $(".error-message-transmission").show();
          $(".form-control-transmission").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-transmission").hide();
        $(".form-control-transmission").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Carrosserie **/
    $("#carrosserie").blur(function(){
        if($("#carrosserie :selected").text()=="Choisir le type de carrosserie"){
          $(".error-message-carrosserie").show();
          $(".form-control-carrosserie").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-carrosserie").hide();
        $(".form-control-carrosserie").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Puissance Fiscale **/
    $("#puissance").blur(function(){
        if($("#puissance :selected").text()=="Choisir la puissance fiscale"){
          $(".error-message-puissance").show();
          $(".form-control-puissance").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-puissance").hide();
        $(".form-control-puissance").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Vitesse **/
    $("#vitesse").blur(function(){
        if($("#vitesse :selected").text()=="Choisir la boîte de vitesses"){
          $(".error-message-vitesse").show();
          $(".form-control-vitesse").addClass("error-msg").removeClass("valid-msg");
        }
      else{
        $(".error-message-vitesse").hide();
        $(".form-control-vitesse").addClass("valid-msg").removeClass("error-msg");
      }
    });

    /** Description **/
      $("#description").blur(function(){
    		if($(this).val().length<100){
    			$(".error-message-description-1").show();
          $(".error-message-description-2").hide();
          $(this).addClass("error-msg").removeClass("valid-msg");
    		}
        if(($(this).val().length>=100)&&($(this).val().length<=500)){
    			$(".error-message-description-1").hide();
          $(".error-message-description-2").hide();
          $(this).addClass("valid-msg").removeClass("error-msg");
    		}
    		if($(this).val().length>500){
    			$(".error-message-description-2").show();
          $(".error-message-description-1").hide();
          $(this).addClass("error-msg").removeClass("valid-msg");
    		}
    	});

});
