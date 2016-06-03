$(function() {

	//ready_to_tabs active javascript
	$('.wrapper-vtr .tabs .tabs__controls-item a').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.wrapper-vtr .tabs .tabs__controls-item'),
		contentItem = $('.wrapper-vtr .tabs .tabs__list .tabs__item'),
		itemPosition = item.index();

		contentItem.eq(itemPosition)
		.add(item)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
