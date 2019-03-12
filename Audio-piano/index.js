const initEvents = () => {
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => {
		key.addEventListener('transitionend', removeAnimation);
	});
	window.addEventListener('keydown', playSound);
}

const playSound = (event) => {
	const audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const keyElement = document.querySelector(`div[data-key="${event.keyCode}"]`);
	audioElement.play();
	audioElement.currentTime = 0;
	keyElement.classList.add('playing');
};

const removeAnimation = (event) => {
	if (event.propertyName == 'transform') {
		event.target.classList.remove('playing');
	}
}

initEvents();