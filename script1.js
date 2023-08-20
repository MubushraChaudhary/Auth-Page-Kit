function validateRegistrationForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsCheckbox = document.getElementById("termsCheckbox").checked;

  console.log(name, password, confirmPassword, termsCheckbox);

  if (!name || !email || !password || !confirmPassword || !termsCheckbox) {
    alert(
      "Please fill in all the required fields and accept the terms & conditions."
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter.");
    return;
  }

  const RegistrationForm = {
    name: name,
    email: email,
    password: password,
    
  };

  const existingData = localStorage.getItem("userRegistrationData");
  let userDataArray = existingData ? JSON.parse(existingData) : [];

  userDataArray.push(RegistrationForm);

  const userData = JSON.stringify(userDataArray);
  localStorage.setItem("userRegistrationData", userData);

  alert("Registration successful!");
  document.getElementById("RegistrationForm").reset();
  window.location.href =
    "file:///C:/Users/Mubushra/Desktop/Task/Untitled-2.html";
}

document
  .querySelector("#RegistrationForm")
  .addEventListener("submit", validateRegistrationForm);
