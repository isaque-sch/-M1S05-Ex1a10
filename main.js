const movies = []

const conteiner = document.getElementById('conteiner')
const searchConteiner = document.getElementById('searchConteiner')

const title = document.getElementById('title-input')
const duration = document.getElementById('duration-input')
const rating = document.getElementById('rating-input')
const search = document.getElementById('search-input')


class MoviesLog {
    title;
    duration;
    rating;
    watched;
    favorite;

    constructor(title, duration, rating) {
        this.title = title
        this.duration = duration
        this.rating = rating
        this.watched = false
        this.favorite = false
    }
}

function registerMovies() {
    if (alreadyRegistered(title.value) === 'true') {
        window.alert('Esse filme já foi registrado')
    }
    else if (title.value === '' || duration.value === '' || rating.value === '') {
        window.alert('os campos do filme não podem estar em branco')
    }
    else {
        movies.push(new MoviesLog(title.value, duration.value, rating.value))
        addCard()
    }

    console.log(movies)
}

function alreadyRegistered(title) {
    if (movies.find((movie) => movie.title === title)) {
        return 'true'
    }
}

function addCard () {
    let i = movies.length - 1
    conteiner.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
            <img class="movieImg" src="img/Design sem nome.png" alt="" >
            <span class="movie-card">${movies[i].title}</span>
            <span class="movie-card">${movies[i].duration} Minutos</span>
            <span class="movie-card">${movies[i].rating} Estrelas</span>
        </div>
        `
        );
    window.alert('O filme foi cadastrado')
}

function searchFunction () { 
    const titleSearch = search.value
    const arraySearch = movies.filter((movie) => movie.title === titleSearch)
    arraySearch.push('.')

    if (arraySearch[0].title === titleSearch) {
        searchConteiner.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
                <img class="movieImg" src="img/Design sem nome.png" alt="" >
                <span class="movie-card">${arraySearch[0].title}</span>
                <span class="movie-card">${arraySearch[0].duration} Minutos</span>
                <span class="movie-card">${arraySearch[0].rating} Estrelas</span>
                <div class="fav"></div>
            </div>
            `
            ); 
    } else {
        window.alert('Nenhum filme foi encontrado')
    }
} 
