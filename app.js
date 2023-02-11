// Login Function

document.querySelector("#submit-btn").addEventListener("click", () => {
  const emailField = document.querySelector("#email_field");
  const passField = document.querySelector("#pw_field");

  const email = emailField.value;
  const pass = passField.value;

  if (email == "ajrabbyk72@gmail.com" && pass == "Rabby12345") {
    location.href = "/" + "dashboard.html";
    email.value = "";
  } else {
    alert("Use Your Valid Info To Access Your Account Dashboard");
  }
});
