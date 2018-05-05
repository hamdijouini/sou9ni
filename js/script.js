$(document).ready(function(){
	/** POPUP **/

	$(".model2").on("click",function(){
		$("#myModel1").show();
		//$("#myModel2").hide();
	});

	$(".model3").on("click",function(){
		$("#myModel1").show();
		//$("#myModel2").hide();
	});

	$("#passwordHelp a").on("click",function(){
		$("#myModel1").hide();
		$("#myModel2").show();
	});

	$("#span>u>a").on("click",function(){
		$("#myModel1").hide();
		$("#myModel3").show();
	});

	$(".modal-body>span>u>a").on("click",function(){
		$("#myModel1").hide();
		$("#myModel3").show();
	});

	$("#myModel2").on("blur",function(){
		$("#myModel1").show();
		//$("#myModel2").hide();
	});

	$("#myModel3").on("blur",function(){
		$("#myModel1").show();
		//$("#myModel2").hide();
	});

	$("#InputEmail2").on("focus",function(){
		$("#myModel1").hide();
	});


	$(".form-control-popup").on("focus",function(){
			$("#myModel1").hide();
		});

	/** Enable WOW effects**/
	new WOW().init();


	/** Animated burger menu**/

    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });

	/** Search form**/

	$(".form-control").change(function(){
		$(this).css("border-bottom","1px solid #082c49");
	});

	$(".myform-control").change(function(){
		$(this).css("border-bottom","1px solid #082c49");
	});


	/** Afficher plus**/

	$(".link-annonce").hover(function(){
		$(".link-annonce").css("color","#ff9c19");
		$(".angle-right").css("background-image", "url('images/angle-right-hover.png')");
	},function(){
		$(".link-annonce").css("color","#555");
		$(".angle-right").css("background-image", "url('images/angle-right.png')");
	});


});
