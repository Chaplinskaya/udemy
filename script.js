const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
const a = prompt('Один из просмотренных фильмов?', '');
const b = prompt('На сколько его оцените?', '');
const c = prompt('Один из просмотренных фильмов?', '');
const d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for(let i=1; i<=2; i++) {
    const a = prompt('Один из просмотренных фильмов?', '');
    const b = prompt('На сколько фильм оцените?', '');

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

if (0) {
    console.log('Ok');
} else {
console.log('Error')
}

const num = 50;
if (num<40) {
    console.log('error');
} else if (num>100) {
    console.log('Много');
} else {
    console.log('ok');
}
const num = 50;
(num === 50) ? console.log('ok') : console.log('error')

const num = 50;
switch(num) {
    case 49:
        console.log('неверно');
        break;
    case 45:
        console.log('нет');
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('не сейчас');
        break;
};

/*let number=50;
while(number<55) {
    console.log(number);
    number++;
}
*/

let num=50;

/*do {
    console.log(num);
    num++;
}
while( num<55 );*/

for(let i=1; i<7; i++) {
    console.log(num);
    num++;
}

for(let i=1; i<10; i++) {
    if(i===5) {
        //break;
        continue;
    }
    console.log(i);
}