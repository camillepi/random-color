const colors = ['red', 'green', 'purple', 'grey', 'lightblue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomArray() {
	return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function () {
	const randomNumber = getRandomArray();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
