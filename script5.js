function resetPassword(event) {
  event.preventDefault();
  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  console.log(newPassword, confirmPassword);
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match. Please re-enter.");
    return;
  }

  const currentUser = localStorage.getItem("currentUserEmail");

  const users = JSON.parse(localStorage.getItem("userRegistrationData"));

  const resetIndex = users.findIndex((user) => user.email === currentUser);

  console.log(resetIndex);

  users[resetIndex].password = newPassword;
  delete users[resetIndex].token;

  localStorage.setItem("userRegistrationData", JSON.stringify(users));

  alert("Password updated successfully!");
  document.getElementById("Reset-password-form").reset();
}

document
  .getElementById("Reset-password-form")
  .addEventListener("submit", resetPassword);
