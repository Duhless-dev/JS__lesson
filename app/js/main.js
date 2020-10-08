//const {
//	stream
//} = require("browser-sync");

$(() => {
	const numberOfFilms = +prompt("Сколько Фильмов вы уже посмотрели?", "");

	function countFilms(count) {
		if (count < 10) {
			alert('Просмотрено довольно мало Фильмов');
		} else if (count >= 10 && count < 30) {
			alert('Обычный зритель');
		} else if (count >= 30) {
			alert('Киноман');
		} else {
			alert('Произошла ошибка');
		}
	}

	countFilms(numberOfFilms);

	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
		movieShow: function () {
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
		},
		toogleVisibleMyDB: function (p) {
			if (p.privat == false) {
				p.privat = true;
			} else {
				p.privat = false;
			}
		},
		showMyDB: function (a) {
			if (a.privat == false) {
				console.log(a);
			}
		},
		writeYourGenres: function (a) {
			for (let i = 0; i < 3; i++) {
				let b = prompt(`Ваш любимый Фильм под номером ${i+1}`, "");
				if (b != null || b.length != 0) {
					a.genres[i] = b;
				} else {
					i--;
				}
			}
			a.genres.forEach(function (item, i) {
				console.log(`Любимый жанр ${i} - это ${item}`)
			});
			return a;
		},
	};

	personalMovieDB.toogleVisibleMyDB(personalMovieDB);

	personalMovieDB.showMyDB(personalMovieDB);

	personalMovieDB.movieShow();

	personalMovieDB.writeYourGenres(personalMovieDB);


});