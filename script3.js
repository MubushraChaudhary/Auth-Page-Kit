function generateToken(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }

  return token;
}

function setToken() {
  const emailInput = document.getElementById("email").value;
  const randomToken = generateToken(6);

  let registeredUsers = JSON.parse(
    localStorage.getItem("userRegistrationData")
  );

  if (!registeredUsers) {
    registeredUsers = [];
  }

  const existingUser = registeredUsers.find(
    (user) => user.email === emailInput
  );

  if (existingUser) {
    existingUser.token = randomToken;
  } else {
    alert("You are not registered.");
    return;
  }

  localStorage.setItem("userRegistrationData", JSON.stringify(registeredUsers));
  alert("Token generated successfully!");
  window.location.href = "http://127.0.0.1:5500/Untitled-4.html";
}

document
  .getElementById("Forget-passwordform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    setToken();
  });
