function renderSearchBar(){
  document.querySelector('#page').innerHTML = `
  <section class='search'>
    <form onSubmit="renderMovieList(event)"> 
      <h2>Search Movies</h2>
      <fieldset>
        <label>movie title:</label>
        <input id="search" type='text' name='movie-title'>
        </input>
      </fieldset>
      <button id="search-btn">search</button>     
    </form>
  </section>
  <section class='movies-default'>
    <section class='suspense-section'>suspense
        <ul>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg" alt="img">
                <div class='title'>Squid Game</div>
                <div class='rating'>7.5</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/c/ce/VirginSuicidesPoster.jpg" alt="">
                <div class='title'>Virgin Suicides</div>
                <div class='rating'>7.1</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" alt="">
                <div class='title'>Inception</div>
                <div class='rating'>8.5</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg" alt="">
                <div class='title'>Gone Girl</div>
                <div class='rating'>9.0</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/43/Butterflyeffect_poster.jpg" alt="">
                <div class='title'>the Butterfly Effect</div>
                <div class='rating'>9.1</div>
            </li>
            
            
        </ul>
    </section>
    <section class='comedy-section'>comedy
        <ul>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg" alt="">
                <div class='title'>Zootopia</div>
                <div class='rating'>7.7</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Movie_poster_the_terminal.jpg" alt="">
                <div class='title'>the Terminal</div>
                <div class='rating'>7.7</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" alt="">
                <div class='title'>3 Idiots</div>
                <div class='rating'>9.2</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Flipped_poster.jpg" alt="">
                <div class='title'>Flipped</div>
                <div class='rating'>9.1</div>
            </li>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5b/Green_Book_%282018_poster%29.png" alt="">
                <div class='title'>Green Book</div>
                <div class='rating'>8.3</div>
            </li>
        </ul>
    </section>
</section>  
  `
}

function renderMovieList(event) {
  event.preventDefault();
  const movieTitle = document.querySelector("#search").value;
  axios
    .get(`https://omdbapi.com?apikey=2f6435d9&s=${movieTitle}`)
    .then((res) => {
      const movieList = res.data.Search.map((movie) => {
        const title = movie.Title;
        const posterUrl = movie.Poster;
        console.log(movie.imdbID);

        return `
              <div>
              <h6>${title}</h6>
              <img src='${posterUrl}' onClick="renderMovieDetail('${movie.imdbID}')">
              </div>
            `;
      }).join("");
      document.querySelector('.movies-default').innerHTML = movieList
    });
}

function renderMovieDetail(imdbId) {
  console.log("Hello");
  axios.get(`https://omdbapi.com?apikey=2f6435d9&i=${imdbId}`).then((res) => {
    const movie = res.data;
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
