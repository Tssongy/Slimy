function renderMovieList(event) {
  event.preventDefault();
  const movieTitle = document.querySelector("#search").value;
  axios
    .get(`https://omdbapi.com?apikey=2f6435d9&s=${movieTitle}`)
    .then((res) => {
      const movieList = res.data.Search.map((movie) => {
        const title = movie.Title;
        const posterUrl = movie.Poster;
        const imdbId = movie.imdbID;
        axios
          .get(`https://omdbapi.com?apikey=2f6435d9&i=${imdbId}`)
          .then((res) => {
            const movie = res.data;
            axios.post("/api/movies", movie);
          });
        return `
              <div>
              <h6>${title}</h6>
              <img src='${posterUrl}' onClick="renderMovieDetail('${movie.imdbID}')">
              </div>
            `;
      }).join("");
      document.querySelector("#page").innerHTML = movieList;
    });
}

function renderMovieDetail(imdbId) {
  console.log(imdbId);
  axios.get(`/api/movies/${imdbId}`).then((res) => {
    const movie = res.data;
    console.log(res);
    const movieDetail = `
      <div>
        <h3>${movie.title}</h3>
        <h5>Actors: ${movie.actors}</h5>
        <p>Description: ${movie.description}</p>
        <p>Year: ${movie.year}</p>
      </div>
      <div>
        <img src="${movie.poster}"></img>
        <ul>              
          <li class="material-icons like-icon">thumb_up</li>
          <li class="material-icons sign-up-icon">thumb_down</li>
        </ul>
      </div>
    `;
  })
}
