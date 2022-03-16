function renderMovieList() { 
  const movieTitle = document.querySelector("#search").value;
  axios
    .get(`https://omdbapi.com?apikey=2f6435d9&s=${movieTitle}`)
    .then((res) => {
      const movieList = res.data.Search.map((movie) => {
        const title = movie.Title;
        const posterUrl = movie.Poster;
        const imdbId = movie.imdbID;
        console.log(imdbId);
        return `
              <div>
              <h6>${title}</h6>
              <img src="${posterUrl}" onClick="renderMovieDetail(${imdbId})"></img>
              </div>
            `;
      }).join("");
      document.querySelector("#page").innerHTML = movieList;
    });
}

function renderMovieDetail(imdbId) {
  axios.get(`https://omdbapi.com?apikey=2f6435d9&i=${imdbId}`).then((res) => {
    const movie = res;
    console.log(res);
    const movieDetail = `
        <div>
          <img src="${movie.Poster}"></img>
        </div>
        <div>
          <h4>${movie.Title}</h4>
          <h6></h6>
        </div>
      `;
  });
}
