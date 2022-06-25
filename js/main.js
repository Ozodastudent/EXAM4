var FormEl = document.querySelector(".login_form");
var nameEl = document.querySelector(".name_input");
var emailEl = document.querySelector(".email_input");
var passwordEl = document.querySelector(".password_input");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const credentials = {
    email: FormEl.value,
    password: passwordEl.value,
  };
  const result = await loginRequest(credentials);
  localStorage.setItem("token", result["Authorization"]);
  window.location.href = "/admin.html";
  console.log(result);
});
