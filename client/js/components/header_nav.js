function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `    
    <ul>              
      <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
      <li class="material-icons login-icon" onClick="render('login')">login</li>
    </ul>
    <form onSubmit="render('movieList')"> 
      <fieldset>
        <label>movie title:</label>
        <input id="search" type='text' name='movie-title'>
        </input>
      </fieldset>
      <button id="search-btn">search</button>     
    </form>
    `
  }
  
  // render header nav on page load
  renderHeaderNav()
  
  // decide which component to display on the page
  function render(component) {
    
    if (component === 'movieList') {
      renderMovieList()
    } else if (component === 'signUp') {
      renderSignUp()
    } else if (component === 'login') {
      renderLogin()
    }
  }
  
  // component to render initially
  render('movieList')