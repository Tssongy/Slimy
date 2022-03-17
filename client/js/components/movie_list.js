function renderSearchBar() {
  document.querySelector("#page").innerHTML = `
  <section class='search'>
    <h2>Search Movies</h2>
      <div class="search-container">  
      <input id="search" type='text' name='movie-title' placeholder="Search...">
      </input>
      <span class="search-btn" onClick="renderMovieList()">
        <i class="fas fa-search"></i> 
      </span> 
      </div>
 
  </section>
  <section class='movies-default'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg" alt="img">
        <div class='title'>Squid Game</div>
        <div class='rating'>7.5</div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/c/ce/VirginSuicidesPoster.jpg" alt="">
        <div class='title'>Virgin Suicides</div>
        <div class='rating'>7.1</div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" alt="">
        <div class='title'>Inception</div>
        <div class='rating'>8.5</div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg" alt="">
        <div class='title'>Gone Girl</div>
        <div class='rating'>9.0</div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/43/Butterflyeffect_poster.jpg" alt="">
        <div class='title'>the Butterfly Effect</div>
        <div class='rating'>9.1</div>
      </div>
    
      <div>      
        <img src="https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg" alt="">
        <div class='title'>Zootopia</div>
        <div class='rating'>7.7</div>
      </div>
      <div>      
        <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Movie_poster_the_terminal.jpg" alt="">
        <div class='title'>the Terminal</div>
        <div class='rating'>7.7</div>
      </div>
      <div>      
        <img src="https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" alt="">
        <div class='title'>3 Idiots</div>
        <div class='rating'>9.2</div>
      </div>
      <div>     
        <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Flipped_poster.jpg" alt="">
        <div class='title'>Flipped</div>
        <div class='rating'>9.1</div>
      </div>
      <div>      
        <img src="https://upload.wikimedia.org/wikipedia/en/5/5b/Green_Book_%282018_poster%29.png" alt="">
        <div class='title'>Green Book</div>
        <div class='rating'>8.3</div>
      </div>
            
</section>  
  `;
}

function renderMovieList() {
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
                <h3>${title}</h3>
                <img src='${posterUrl}' onClick="renderMovieDetail('${imdbId}')">
                </div>
              `;
      }).join("");
      document.querySelector(".movies-default").innerHTML = movieList;
    });
}

function renderMovieDetail(imdbId) {
  axios.get(`/api/movies/${imdbId}`).then((res) => {
    const movie = res.data;
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
        <section id=reviews-box></section>
        <form id="add-comment" onSubmit='createReviewsMovie(event, ${state.user.userId}, ${movie.id})'>
          <fieldset>
            <label for="">comment:</label>
            <section class="error"></section>
            <input type="text" name="comment">
          </fieldset>
          <button>Submit</button>
        </form>
      `;
    document.querySelector(".movies-default").innerHTML = movieDetail;
    renderMovieReviews(movie.id);
  });
}

function renderMovieReviews(movieId) {
  axios
    .get(`/api/reviews/${movieId}`)
    .then((res) => res.data)
    .then((res) => {
      // if (res.review) {
      console.log(res);
      const reviewsBox = res
        .map((movie) => {
          return `
          <div>
            <p>"${movie.review}"</p>
            <ul>              
              <li class="material-icons like-icon">thumb_up</li>
              <li class="material-icons sign-up-icon">thumb_down</li>
          </ul>
          </div>
        `;
        })
        .slice(0, 5)
        .join("");
      // }

      document.querySelector("#reviews-box").innerHTML = reviewsBox;
    });
}

function createReviewsMovie(event, userId, movieId) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  data.userId = userId;
  data.movieId = movieId;
  // data.rating = rating;
  console.log(data);
  axios.post("/api/reviews", data)
    .then((res) => res.data)
    .then(() => renderMovieReviews(movieId))
    .catch((error) => {
      let errorDOM = document.querySelector('.movies-default .error')
      errorDOM.textContent = error.response.data.message;
    })
}
