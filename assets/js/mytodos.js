$("input[type = 'text']").on("keypress", function(event){
	if (event.which == 13 && $(this).val() !== ""){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("h1 i").on("click", function(){
	$("input[type='text']").fadeToggle();
});