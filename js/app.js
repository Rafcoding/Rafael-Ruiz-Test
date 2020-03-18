$(function() {


	$('.j-carousel').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false
	});


});


const styleOne = 'color: red;' + 'font-size: 14px;' + 'font-weight: bold;';
const styleTwo = 'color: black;' + 'font-size: 14px;' + 'font-weight: bold;';
const styleThree = 'color: blue;' + 'font-size: 14px;' + 'font-weight: bold;';

console.log("%cHey There! 👋👋👋", styleOne);
console.log("%cIt has been a pleasure producing this code for you.", styleTwo);
console.log("%cMany Thanks!", styleThree);
console.log("%cRafa Ruiz", styleThree);