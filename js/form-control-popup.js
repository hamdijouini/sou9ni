$(document).ready(function(){

  $(".error-message").hide(); //hide all erreor messages

  var exp1=new RegExp("^[a-zA-Z\ ]{3,20}$","g");
  var exp2=new RegExp("^[a-zA-Z0-9\ \.\,]{10,30}$","g");
  var exp3=/^([\a-zA-Z-0-9_\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\a-zA-Z]+\.)+))([a-zA-Z]{2,3})(\]?)$/;
  var exp4=new RegExp("^[0-9]{8}$","g");


  $("#nom").blur(function(){
	var tab=$("#nom").val().match(exp1);
		if(tab==null){
			$(".error-message-nom").show();
      $(".form-control-popup-nom").addClass("error").removeClass("valid");
		}
		else{
			$(".error-message-nom").hide();
      $(".form-control-popup-nom").addClass("valid").removeClass("error");
		}
	});

  $("#prenom").blur(function(){
	var tab=$("#prenom").val().match(exp1);
		if(tab==null){
			$(".error-message-prenom").show();
      $(".form-control-popup-prenom").addClass("error").removeClass("valid");
		}
		else{
			$(".error-message-prenom").hide();
      $(".form-control-popup-prenom").addClass("valid").removeClass("error");
		}
	});

  $("#tel").blur(function(){
  var tab=$("#tel").val().match(exp4);
    if(tab==null){
      $(".error-message-tel").show();
      $(".form-control-popup-tel").addClass("error").removeClass("valid");
    }
    else{
      $(".error-message-tel").hide();
      $(".form-control-popup-tel").addClass("valid").removeClass("error");
    }
  });

  $("#email").blur(function(){
  var tab=$("#email").val().match(exp3);
    if(tab==null){
      $(".error-message-email").show();
      $(".form-control-popup-email").addClass("error").removeClass("valid");
    }
    else{
      $(".error-message-email").hide();
      $(".form-control-popup-email").addClass("valid").removeClass("error");
    }
  });


  $("#adresse").blur(function(){
    var tab=$("#adresse").val().match(exp2);
    if(tab==null){
      $(".error-message-adresse").show();
      $(".form-control-popup-adresse").addClass("error").removeClass("valid");
    }
    else{
      $(".error-message-adresse").hide();
      $(".form-control-popup-adresse").addClass("valid").removeClass("error");
    }
  });
  $("#region").blur(function(){
      if($("#region :selected").text()=="Veuillez choisir votre région"){
        $(".error-message-region").show();
        $(".form-control-popup-region").css("border-bottom","1px solid #fe2727");
      }
    else{
      $(".error-message-region").hide();
      $(".form-control-popup-region").css("border-bottom","1px solid #082c49");
    }
  });


  $("#mdp").blur(function(){
    if($(this).val().length<=7){
      $(".error-message-mdp-1").show();
      $(".form-control-popup-mdp").addClass("error").removeClass("valid");
    }
    if(($(this).val().length>7)&&($(this).val().length<=30)){
      $(".error-message-mdp-1").hide();
      $(".error-message-mdp-2").hide();
      $(".form-control-popup-mdp").addClass("valid").removeClass("error");
    }
    if($(this).val().length>30){
      $(".error-message-mdp-1").hide();
      $(".error-message-mdp-2").show();
      $(".form-control-popup-mdp").addClass("error").removeClass("valid");
    }
  });

  $("#mdp2").blur(function(){
    if($("#mdp").val()!=$("#mdp2").val()){
      $(".error-message-mdp-3").show();
      $(".error-message-mdp-4").hide();
      $(".form-control-popup-mdp2").addClass("error").removeClass("valid");
    }
    if($("#mdp2").val()==""){
      $(".error-message-mdp-4").show();
      $(".error-message-mdp-3").hide();
      $(".form-control-popup-mdp2").addClass("error").removeClass("valid");
    }
    if(($("#mdp").val()==$("#mdp2").val())&&($("#mdp2").val()!="")){
      $(".error-message-mdp-3").hide();
      $(".error-message-mdp-4").hide();
      $(".form-control-popup-mdp2").addClass("valid").removeClass("error");
    }
  });

  $("#login").blur(function(){
    if(($(this).val().length<5) || ($(this).val().length>20)){
      $(".error-message-login").show();
      $(".form-control-popup-login").addClass("error").removeClass("valid");
    }
    else{
      $(".error-message-login").hide();
      $(".form-control-popup-login").addClass("valid").removeClass("error");
    }
  });

});
