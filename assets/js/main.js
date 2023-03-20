(function ($) {

	$(document).ready(function () {

		// make the first accordion open by default
		$('.accordion__item.active .accordion__content').css('height', function () {
			return $(this).children().first().height() + 'px';
		});

		$('.custom-accordion .accordion__title').on("mouseover", function (event) {
			if (event.target.nodeName === "A" || event.target.nodeName === "SPAN" || event.target.nodeName === "IMG") {
				event.preventDefault();
			}

			const parent = $(this).parent();
			$('.accordion__item').not(parent).removeClass('active');
			parent.addClass('active');

			const content = parent.find('.accordion__content');
			const height = content.children().first().height();
			content.css('height', height + 'px');
			$('.accordion__item .accordion__content').not(content).css('height', 0);
		});


		const swiper1 = new Swiper('.swiper-1', {
			direction: 'vertical',
			loop: true,
			allowTouchMove: true,
			speed: 1000
		});


		const swiper2 = new Swiper(".mySwiper", {
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		const swiper3 = new Swiper('.swiper-3', {
			direction: 'vertical',
			loop: true,
			allowTouchMove: true,
			speed: 1000
		});

		function showContent() {
			const activeItem = $(".featured-slider .swiper-slide-active").children().first();
			const title = activeItem.attr("data-title");
			const location = activeItem.attr("data-location");
			$(".featured-content h3").text(title);
			$(".featured-content p").text(location);
		}

		showContent();

		swiper2.on('slideChange', function () {
			showContent();
		});

		const carouselTicker = $("#carouselTicker").carouselTicker({
			speed: 1
		});

		// Mousewheel event
		$("body").on("mousewheel", function (e) {
			if (e.deltaY > 0) {
				carouselTicker.next();
			} else {
				carouselTicker.prev();
			}
		});

		// Mousewheel event
		let isFirstScroll = false;
		$(".welcome-video").on("mousewheel", function (e) {
			const currentItem = swiper1.activeIndex;
			const total = swiper1.slides.length - swiper1.loopedSlides * 2;
			if (!isFirstScroll) {
				isFirstScroll = true;
				$(".hero-wrapper").addClass("show");
				e.preventDefault();
			} else {
				if (e.deltaY > 0) {
					if (!(currentItem === 1)) {
						swiper1.slidePrev();
						e.preventDefault();
					}
				} else {
					if (!(currentItem === total)) {
						swiper1.slideNext();
						e.preventDefault();
					}
				}
			}
		});

	});


	$(window).on("load", function () {
		// WOW
		new WOW().init();
	});
})(jQuery);

