function renderMovieList() {
    const movieTitle = document.querySelector('#search').value
    axios
      .get(`https://omdbapi.com?apikey=2f6435d9&s=${movieTitle}`)
      .then((res) => {
        const movies = res.data;
      });
  });
}
