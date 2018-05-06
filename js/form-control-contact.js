$(document).ready(function(){

   $(".error-form").hide();
   
	/** Counters **/
	jQuery('.counter-num').counterUp({
                delay: 8,
                time: 1500
        }); 
	

	  var exp1=new RegExp("^[a-zA-Z\ ]{3,20}$","g");
	  var exp3=/^([\a-zA-Z-0-9_\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\a-zA-Z]+\.)+))([a-zA-Z]{2,3})(\]?)$/;
	  var exp4=new RegExp("^[0-9]{8}$","g");

	  /** Nom **/
	$("#nom").blur(function(){
		var tab=$("#nom").val().match(exp1);
			if(tab==null){
				$(".error-message-nom").show();
				$(".form-control-nom").addClass("error-msg").removeClass("valid-msg");
			}
			else{
				$(".error-message-nom").hide();
				$(".form-control-nom").addClass("valid-msg").removeClass("error-msg");
			}
		});
		
	/** Prénom **/
	$("#prenom").blur(function(){
		var tab=$("#prenom").val().match(exp1);
			if(tab==null){
				$(".error-message-prenom").show();
				$(".form-control-prenom").addClass("error-msg").removeClass("valid-msg");
			}
			else{
				$(".error-message-prenom").hide();
				$(".form-control-prenom").addClass("valid-msg").removeClass("error-msg");
			}
		});
		
	/** Tel **/
	$("#tel").blur(function(){
	  var tab=$("#tel").val().match(exp4);
		if(tab==null){
		  $(".error-message-tel").show();
		  $(".form-control-tel").addClass("error-msg").removeClass("valid-msg");
		}
		else{
		  $(".error-message-tel").hide();
		  $(".form-control-tel").addClass("valid-msg").removeClass("error-msg");
		}
	  });
	  
	/** Sujet **/
	  $("#sujet").blur(function(){
		if($(this).val().length<10){
		  $(".error-message-sujet-2").show();
		  $(".error-message-sujet-1").hide();
		  $(".form-control-sujet").addClass("error-msg").removeClass("valid-msg");
		}
		if(($(this).val().length>=10)&&($(this).val().length<=50)){
		  $(".error-message-sujet-1").hide();
		  $(".error-message-sujet-2").hide();
		  $(".form-control-sujet").addClass("valid-msg").removeClass("error-msg");
		}
		if($(this).val().length>50){
		  $(".error-message-sujet-2").hide();
		  $(".error-message-sujet-1").show();
		  $(".form-control-sujet").addClass("error-msg").removeClass("valid-msg");
		}
	  });

	/** Email **/
	$("#email").blur(function(){
	  var tab=$("#email").val().match(exp3);
		if(tab==null){
		  $(".error-message-email").show();
		  $(".form-control-email").addClass("error-msg").removeClass("valid-msg");
		}
		else{
		  $(".error-message-email").hide();
		  $(".form-control-email").addClass("valid-msg").removeClass("error-msg");
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
