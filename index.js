const yesterdayRadio = document.querySelector('#yesterday-radio');
const todayRadio = document.querySelector('#today-radio');
const tomorrowRadio = document.querySelector('#tomorrow-radio');
const yesterdayItems = document.querySelector('#yesterday-items');
const todayItems = document.querySelector('#today-items');
const tomorrowItems = document.querySelector('#tomorrow-items');
const burgerCheckbox = document.querySelector('#hor-bars');
const burgerIcon = document.querySelector('#burger-icon');
const dropdownMenu = document.querySelector('#dropdown-menu');

yesterdayRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', yesterdayItems, [todayItems, tomorrowItems]);
});

todayRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', todayItems, [yesterdayItems, tomorrowItems]);
});

tomorrowRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', tomorrowItems, [yesterdayItems, todayItems]);
});

burgerCheckbox.addEventListener('click', () => {
	if (isChecked(burgerCheckbox)) {
		toggleClassFromElements('bar-icon--checked', '', [burgerIcon]);
		toggleClassFromElements('dropdown-menu__container--hidden', dropdownMenu, []);
	} else {
		toggleClassFromElements('bar-icon--checked', burgerIcon, []);
		toggleClassFromElements('dropdown-menu__container--hidden', '', [dropdownMenu]);
	}
});

function toggleClassFromElements(className, starterElement, elements) {
	if (starterElement) {
		starterElement.classList.remove(className);
	}
	elements.forEach((element) => {
		element.classList.add(className);
	});
}

function isChecked(checkbox) {
	if (!!checkbox.checked) {
		return true;
	}
	return false;
}

//	This event fix a bug caused by the browser cache where the last
//	capsule button pressed keeps highlighted another way to fix this
//	is by doing a hard refresh (on firefox= ctrl + shift + r)
window.addEventListener('load', () => {
	todayRadio.click();
});
