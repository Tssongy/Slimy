function renderLogin() {
  document.querySelector("#page").innerHTML = `
  <section class="log-in">
    <div class="error"></div>
    <form action="" onSubmit="login(event)">
      <h2>Login:</h2>
      <fieldset>
        <label for="">Email:</label>
        <input type="text" name="email">
      </fieldset>  
      <fieldset>
        <label for="">Password:</label>
        <input type="password" name="password">
      </fieldset>  
      <button>Login</button>
    </form>
    </section>
  `;
}

function login(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));

  // document.querySelector("#header-nav").innerHTML = `
  //   <h1 onClick="render('movieList')">Welcome to Slimy world</h1>
  //   <ul>
  //     <li class="material-icons search-icon" onClick="render('movieList')">search</li>
  //     <li class="material-icons logout-icon" onClick="render('logOut')">logout</li>
  //   </ul>
  //   `
  axios
    .post("/api/sessions", data)
    .then((res) => res.data)
    .then((userInfo) => {
      state.user.userName = userInfo.userName
      state.user.userId = userInfo.userId
      console.log(state.user)
      renderHeaderNav();
    })
    .catch((error) => {
      let errorDOM = document.querySelector(".log-in .error");
      errorDOM.textContent = error.response.data.message;
    });
}

function renderLogOut() {
  axios
    .delete("/api/sessions")
    .then((res) => res.data)
    .then((res) => {
      console.log(res.message);
      state.user = {}
      console.log(state.user)
      renderHeaderNav();
    });
}
