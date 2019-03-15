const hour = document.querySelector('.hour');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');

const setTime = () => {
	const time = new Date();
	const secondValue = time.getSeconds() + 90;
	second.style.transform = `rotate(${secondValue}deg)`;

	const minuteValue = (time.getMinutes()/60 * 360) + 90;
	minute.style.transform = `rotate(${minuteValue}deg)`;
	
	const hourValue = (time.getHours()/12 * 360)+ 90;
	hour.style.transform = `rotate(${hourValue}deg)`;
}

setInterval(setTime, 1000);

