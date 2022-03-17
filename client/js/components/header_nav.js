function renderHeaderNav() {
  if(!state.user.userName){
    renderNotLoggedInHeaderNav()
  }
  else {
    renderLoggedInHeaderNav(state.user.userName)
  }
  // axios
  //   .get('/api/sessions/')
  //   .then((res) => res.data)
  //   .then((res) => {
  //     renderLoggedInHeaderNav(res.username);
  //   })
  //   .catch((err) => {
  //     renderNotLoggedInHeaderNav();
  //   });
}

function renderNotLoggedInHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
    <h1 onClick="render('movieList')">Welcome to Slimy world</h1>    
    <ul>            
      <li class="material-icons search-icon" onClick="render('movieList')">search</li>
      <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
      <li class="material-icons login-icon" onClick="render('login')">login</li>
    </ul>
    `
}

function renderLoggedInHeaderNav(userName) {
  document.querySelector("#header-nav").innerHTML = `
    <h1 onClick="render('movieList')">Welcome to Slimy world, <span style="text-transform:uppercase">${userName}</span></h1>
    <ul>           
      <li class="material-icons search-icon" onClick="render('movieList')">search</li>
      <li class="material-icons logout-icon" onClick="render('logOut')">logout</li>
    </ul>
    `
}


// render header nav on page load
renderHeaderNav()

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
