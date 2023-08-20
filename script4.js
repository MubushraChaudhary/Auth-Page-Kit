function validateToken(event) {
  event.preventDefault();
  const enteredToken = document.getElementById("Token").value;

  const registeredUsers = JSON.parse(
    localStorage.getItem("userRegistrationData")
  );

  if (!registeredUsers) {
    alert("No registered users found!");
    return;
  }

  const existingUser = registeredUsers.find(
    (user) => user.token === enteredToken
  );

  if (existingUser) {
    localStorage.setItem("currentUserEmail", existingUser.email);
    window.location.href = "http://127.0.0.1:5500/Untitled-5.html";
  } else {
    alert("Invalid token. Please try again.");
  }
}

document
  .getElementById("Enter-Tokenform")
  .addEventListener("submit", validateToken);
