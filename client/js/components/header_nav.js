function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
    <h1 onClick="render('movieList')">Welcome to Slimy world</h1>    
    <ul>              
      <li class="material-icons search-icon" onClick="render('movieList')">search</li>
      <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
      <li class="material-icons login-icon" onClick="render('login')">login</li>
    </ul>
    `
}

// render header nav on page load
renderHeaderNav();

// decide which component to display on the page
function render(component) {
  if (component === "movieList") {
    renderSearchBar()
  } else if (component === "signUp") {
    renderSignUp();
  } else if (component === "login") {
    renderLogin();
  } else if (component === 'logOut'){
    renderLogOut()
  }
}

// component to render initially
render("movieList");
