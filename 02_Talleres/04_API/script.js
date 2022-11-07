const API_KEY = 'api_key=1f8e51829d2e41886aafae6840597b58';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => { // Obtenemos la data por medio de un Json
    
    showMovies(data.results); // Hago esta fn para mostrar películas
    console.log(data)
  })
}

function showMovies(data) {

  main.innerHTML = ''; // Se limpia la data para poder agregar más elementos

  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie; // Lo usamos para destructurar el objeto y traernos la data
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie'); // Agregamos una lista de clases
    movieEl.innerHTML = `
      <img src="${IMG_URL+poster_path}" alt="${title}">

      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
      </div>

      <div class="overview">
      <h3></h3>
        ${overview}
      </div>
    `

    main.appendChild(movieEl); // Agregamos los elementos a la etiqueta principal

  })

}

function getColor(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// Cuando se presione enter o le den click a buscar hará esto
form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  
  // Llamamos a la fn getMovies
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm);
  } else {
    getMovies(API_URL);
  }
})