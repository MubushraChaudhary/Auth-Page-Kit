function validateLoginForm(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  if (!email || !password) {
    alert("Please fill in all the required fields.");
    return;
  }

  const userRegistrationData = localStorage.getItem("userRegistrationData");

  if (!userRegistrationData) {
    alert("No registered users found.");
    return;
  }

  const userDataArray = JSON.parse(userRegistrationData);

  const user = userDataArray.find((user) => user.email === email);

  if (!user || user.password !== password) {
    alert("Invalid email or password. Try again.");
    return;
  }

  const loginForm = {
    email: email,
    password: password,
    rememberMe: rememberMe,
  };

  const loginData = JSON.stringify(loginForm);
  localStorage.setItem("userLoginData", loginData);

  alert("Login successful!");
  document.getElementById("loginForm").reset();
}

document
  .getElementById("loginForm")
  .addEventListener("submit", validateLoginForm);
