"use strict"


const search = document.querySelector('.search');
//const searchButton = search.querySelector('.btn-open');
//const searchForm = search.querySelector('.search__form');

function openSearch() {
	search.classList.toggle('_open-search');
}

document.addEventListener("click", function (e) {
	if (e.target.closest('.search__glass')) {
		openSearch();
	}
	if (!e.target.closest('.search__glass') && !e.target.closest('.search__form') && search.classList.contains('_open-search')) {
		openSearch();
	}
});

const inputSearch = search.querySelector('.form__input');
const textInputMax = inputSearch.getAttribute('maxlength');
const textCounter = search.querySelector('.form__counter span');
textCounter.innerHTML = textInputMax;

inputSearch.addEventListener("keyup", symbolSetCounter)
inputSearch.addEventListener('keydown', function (event) {
	if (event.repeat) symbolSetCounter();
});

function symbolSetCounter() {
	const symbolCounterResult = textInputMax - inputSearch.value.length;
	textCounter.innerHTML = symbolCounterResult;
}

search.addEventListener("keyup", function (e) {
	if (e.code === 'Escape') {
		search.classList.remove('_open-search');
	}
})