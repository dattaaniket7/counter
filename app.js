let buttonPlus = document.querySelector('.plus'),
	buttonMinus = document.querySelector('.minus'),
	counter = document.querySelector('.counter'),
	count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

counter.innerHTML = count;

const countSync = () => {
	localStorage.setItem('count', String(count));
	counter.innerHTML = count;
};

const buttonHandler = (e) => {
	e.target.className;
	if (e.target.className === 'plus') count += 1;
	else count -= 1;
	countSync();
};

buttonPlus.addEventListener('click', buttonHandler);

buttonMinus.addEventListener('click', buttonHandler);
