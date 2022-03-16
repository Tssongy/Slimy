function renderLogin () {
  document.querySelector('#page').innerHTML = `
  <section class="log-in">
    <div class"error"></div>
    <form action="" onSubmit="login(event)">
      <h2>Login:</h2>
      <fieldset>
        <label for="">Email:</label>
        <input type="text" name="email"
      </fieldset>  
      <fieldset>
        <label for="">Password:</label>
        <input type="password" name="password"
      </fieldset>  
      <button>Login</button>
    </form>
    </section>
  `
}

function login(event) {
  event.preventDefualt()
  const form = event.text
  const data = object.fromEntries(new FormData(form))
  axios
    .post('/sessions', data)
    .then(res => res.data)
    .catch(error => {
      let errorDom = document.querySelector('.log-in .error')
      errorDom.textContent = error.response.data.message
    })
}