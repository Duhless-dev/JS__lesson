$(() => {
	const numberOfFilms = prompt("Сколько Фильмов вы уже посмотрели?", "");


	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};

	const a = prompt("Один из последних фильмов, которые вы посмотрели?", ""),
		b = prompt("На сколько можете его оценить?", ""),
		c = prompt("Один из последних фильмов, которые вы посмотрели?", ""),
		d = prompt("На сколько можете его оценить?", "");

	personalMovieDB.movies[a] = b;
	personalMovieDB.movies[c] = d;

	console.log(personalMovieDB);





});