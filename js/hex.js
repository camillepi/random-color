const hex = [0, 1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd', 'e', 'f'];
var randomHex = '';

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomArray() {
	return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function () {
	for (let i = 0; i < 6; i++) {
		randomHex += hex[getRandomArray()];
	}
	document.body.style.backgroundColor = `#${randomHex}`;
	color.textContent = randomHex;
	randomHex = '';
});
