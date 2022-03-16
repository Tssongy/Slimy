function renderMovieList() { 
  const movieTitle = document.querySelector("#search").value;
  axios
    .get(`https://omdbapi.com?apikey=2f6435d9&s=${movieTitle}`)
    .then((res) => {
        const movieList = res.data.Search.map(movie => {
            const title = movie.Title 
            const posterUrl = movie.Poster
            return `
              <div>
              <h6>${title}</h6>
              <img src="${posterUrl}"></img>
              </div>
            `
        }).join("")
        document.querySelector('#page').innerHTML = movieList
    })
}
