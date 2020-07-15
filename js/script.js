var navbar = document.querySelector('nav')
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
        nav-link.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
        nav-link.classList.remove('scrolled')
    }
}

jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.navbar li a').css("color","rgb(255, 255, 255)");
		} else {
			$('.navbar li a').css("color","rgb(0, 0, 0)");
		}
	});
});