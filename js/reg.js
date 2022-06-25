var FormEl = document.querySelector(".login_form");
var nameEl = document.querySelector(".name_input");
var emailEl = document.querySelector(".email_input");
var passwordEl = document.querySelector(".password_input");

FormEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const credentials = {
    name: nameEl.value,
    email: emailEl.value,
    password: passwordEl.value,
    isAdmin: true,
  };
  const result = await LoginRequest(credentials);
  if (result) {
    const { name, isAdmin, ...loginCreadentials } = credentials;
    const result = await loginRequest(loginCreadentials);
    localStorage.setItem("token", result["Authorization"]);
    window.location.href = "/admin.html";
  }
});
