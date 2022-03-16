function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
      <ul>
        <li class="material-icons add-movie" onClick="render('addMovie')">add_circle</li>
        <li class="material-icons edit-movie" onClick="render('movieList')">edit</li>
        <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
        <li class="material-icons login-icon" onClick="render('login')">login</li>
      </ul>
    `
  }
  
  // render header nav on page load
  renderHeaderNav()
  
  // decide which component to display on the page
  function render(component) {
    if (component === 'addMovie') {
      renderAddMovie()
    } else if (component === 'movieList') {
      renderMovieList()
    } else if (component === 'signUp') {
      renderSignUp()
    } else if (component === 'login') {
      renderLogin()
    }
  }
  
  // component to render initially
  render('movieList')