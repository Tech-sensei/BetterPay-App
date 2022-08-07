export const loginFunction = function () {
  // Declaring all the the variables
  const signUP = document.querySelector(".sign-up");
  const signIn = document.querySelector(".sign-in");
  const showLogin = document.querySelector(".login--in");
  const showRegister = document.querySelector(".login--create");
  const formImage = document.querySelector(".form--img");

  // Removing the hidden class from register form and putting it into login form

  const showRegisterForm = function () {
    showRegister.classList.remove("hidden");
    // formImage.src = 'register.png';

    showLogin.classList.add("hidden");
  };

  const showLoginForm = function () {
    showRegister.classList.add("hidden");
    // formImage.src = 'login.png';
    showLogin.classList.remove("hidden");
  };
  signUP.addEventListener("click", showRegisterForm);

  signIn.addEventListener("click", showLoginForm);
};

loginFunction();

import * as userData from "./data.js";
import { displayActivityMenu } from "./reusable.js";
import { updateUI } from "./reusable.js";

///////////////////////////////////////////////////////////////////
// Implementing Username for each account
const createUsernames = function (accounts) {
  accounts.forEach((cur) => {
    const pin = String(cur.pin).slice(0, 2);

    // creating a copy of the account1.owner property which is owner property and set it to value.
    cur.username = `${cur.owner.split(" ")[0] + pin}`;
    console.log(cur.username);
  });
};
createUsernames(userData.accounts);
//////////////////////////////////////////////////////////////////////
// IMPLEMENT LOGIN BUTTON
// Validating the Username and Pin
export let currentAccount;

userData.loginBtn.addEventListener("click", function (e) {
  const labelAccountNumber = document.querySelector(".input__account--number");
  e.preventDefault();
  const date = new Date();
  const options = {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const locale = navigator.language;
  const loginBox = document.querySelector('.login--box')
  userData.labelDate.innerHTML = new Intl.DateTimeFormat(
    locale,
    options
  ).format(date);

  currentAccount = userData.accounts.find(
    (acc) => acc.username === userData.inputLoginUsername.value
  );
  console.log(userData.accounts);

  // Looking for the account that matches the username user input to the text field
  currentAccount = userData.accounts.find((acc) => {
    return acc.username === userData.inputLoginUsername.value;
  });

  if (
    currentAccount?.username === userData.inputLoginUsername.value &&
    currentAccount?.pin === +userData.inputLoginPin.value
  ) {
    // Display UI and message
    userData.labelWelcome.textContent = `Welcome, ${
      currentAccount.owner.split(" ")[0]
    }`;
    labelAccountNumber.value = `${currentAccount.accountNumber}`;
    // Update UI
    updateUI(currentAccount);
    // Display User Interface
    if (userData.showMain.classList.contains("hide-main")) {
      userData.showMain.classList.remove("hide-main");
      userData.hideMain.classList.add("hide-main");
    }
    displayActivityMenu();
  }
});
