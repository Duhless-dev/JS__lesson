//const {
//	stream
//} = require("browser-sync");

$(() => {
	const numberOfFilms = +prompt("Сколько Фильмов вы уже посмотрели?", "");

	if (numberOfFilms < 10) {
		alert('Просмотрено довольно мало Фильмов');
	} else if (numberOfFilms > 10 && numberOfFilms < 30) {
		alert('Обычный зритель');
	} else if (numberOfFilms >= 30) {
		alert('Киноман');
	} else {
		alert('Произошла ошибка');
	}


	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};

	for (let i = 0; i < 2; i++) {
		let a = prompt("Один из последних фильмов, которые вы посмотрели?", "");
		if (a == null || a.length == 0 || a.length > 50) {
			alert('Данные не подходят под стандарт');
			i--;
		} else {
			let b = prompt("Насолько вы можете его оценить?", "");
			if (b == null || b.length == 0 || b.length > 50) {
				alert('Данные не подходят под стандарт');
				i--;
			} else {
				personalMovieDB.movies[a] = b;
			}
		}


	}
	console.log(personalMovieDB);





});