const inputsElements = document.querySelectorAll('.controls input');

handleChange = (event) => {
	const attrSizing = event.target.getAttribute('data-sizing') || '';
	const image = document.querySelector('.image');
	image.style.setProperty(`--${event.target.name}`, event.target.value + `${attrSizing}`);
}

inputsElements.forEach(input => input.addEventListener('change', handleChange));
inputsElements.forEach(input => input.addEventListener('mousemove', handleChange));