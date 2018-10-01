const btn = document.querySelector('button');
const square = document.querySelector('.square');

let rotate = 0;
const deg = 10;

btn.addEventListener('click', function() {
	rotate += deg
	square.style.transform = "rotate(" + rotate+ "deg)";
});  
