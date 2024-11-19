const form = document.getElementById("sign-up-form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone-number");
const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirm-pwd");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const mailError = document.getElementById("mail-error");
const phoneError = document.getElementById("phone-number-error");
const pwdError = document.getElementById("pwd-error");
const confirmPwdError = document.getElementById("confirm-pwd-error");

firstName.addEventListener("focusout", (e) => {
  if (firstName.validity.valid) {
    firstName.className = "";
    firstNameError.textContent = " ";
  } else {
    firstName.className = "error";
    firstNameError.textContent = "Please fill in your name"
  }
});

lastName.addEventListener("focusout", (e) => {
  if (lastName.validity.valid) {
    lastName.className = "";
    lastNameError.textContent = " ";
  } else {
    lastName.className = "error";
    lastNameError.textContent = "Please fill in your last name"
  }
});

mail.addEventListener("focusout", (e) => {
  if (mail.validity.valid) {
    mail.className = "";
    mailError.textContent = " ";
  } else {
    mail.className = "error";
    mailError.textContent = "Please fill in your email";
  }
});

phone.addEventListener("focusout", (e) => {
  if (phone.validity.valid) {
    phone.className = "";
    phoneError.textContent =" ";
  } else {
    phone.className = "error";
    phoneError.textContent = "Please fill in your phone number"
  }
});

pwd.addEventListener("focusout", (e) => {
  if (pwd.validity.valid) {
    pwd.className = "";
    pwdError.textContent =" ";
  } else {
    pwd.className = "error";
    pwdError.textContent = "Please fill in your password"
  }
});

confirmPwd.addEventListener("focusout", (e) => {
  if (confirmPwd.value === pwd.value) {
    confirmPwd.className = "";
    confirmPwdError.textContent = " ";
  } else if (confirmPwd.value === "") {
    confirmPwd.className = "error";
    confirmPwdError.textContent = "Please confirm password";
  } else {
    confirmPwd.className = "error";
    confirmPwdError.textContent = "Passwords don't match";
  }
});

form.addEventListener("submit", (e) => {
  const invalidFields = document.getElementsByClassName("error");
  if (invalidFields.length !== 0) e.preventDefault();
});
