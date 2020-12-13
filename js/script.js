$(function(){

	// Ẩn/hiện portfolio
	activeButton(".portfolio button:nth-of-type(1)");
	$(".portfolio button").click(function(event) {
		/* Act on the event */

		activeButton(this);

		var data = $(this).attr("data");

		if (data == undefined) {
			//show hết
			$(".portfolio > .row > div").show("slow");
		}
		else{
			//Ẩn những thằng không được chọn
			$(".portfolio > .row > div").not("[data=" + data + "]").hide("slow");

			//hiển thị column nào có thuộc tính data bằng giá trị của biến data
			$(".portfolio > .row > div[data=" + data + "]").show("slow");
		}

	});

	// Click vào nút back to top, nó chạy top
	$(".back-to-top").click(function(event) {
		/* Act on the event */
		$("html").animate({scrollTop: 0}, 2000);
	});

	toggleBackToTop();
	$(window).scroll(function(event) {
		/* Act on the event */
		// Back to top ẩn/hiện
		toggleBackToTop();

		// Fixed menu
		if ($(this).scrollTop() > $("#portfolio").offset().top - 2) {
			// add thêm class fixed cho menu
			$("header > nav").addClass('navbar-fixed-top');
			$("body").addClass('fixed-menu');
		} else {
			//remove class fixed của menu
			$("header > nav").removeClass('navbar-fixed-top');
			$("body").removeClass('fixed-menu');
		}

		//dùng để hiện menu khi chạy xuống qua id home 
		if($(this).scrollTop() >= 0 &&
			$(this).scrollTop() < $('#home').offset().top + $('#home').height() - 2)
		{
			$('header nav li:first-child').addClass('active');			
		}

		//dùng để chỉnh scroll từ thẻ a tới vị trí cần tới
		$('header nav ul li a').on('click',function(e) {
			e.preventDefault();
			var target = this.hash;
			if (target) {
				var targetObj = $(target);

				$('html, body').stop().animate({
					'scrollTop' : targetObj.offset().top
				}, 1000, 'swing', function(){
					window.location.hash = target;
				})
			}
		});

	});
});

function activeButton(button) {
	$(".portfolio button").removeAttr('style');
	// $(this).css("background-color", "yellow");
	$(button).css({"background-color": "yellow", "color": "red"});
}

function toggleBackToTop() {
	if ($(window).scrollTop() == 0) {
		//thì ẩn back to top
		$(".back-to-top").hide("slow");
	}
	
	else {
		//hiển thị back to top
		$(".back-to-top").show("slow");
	}
}