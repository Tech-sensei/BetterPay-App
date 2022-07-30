"use strict";

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

const showLoginform = function () {
  showRegister.classList.add("hidden");
  // formImage.src = 'login.png';
  showLogin.classList.remove("hidden");
};
signUP.addEventListener("click", showRegisterForm);

signIn.addEventListener("click", showLoginform);

////////////////////////////////////////////////////////////////////////////////////////////
// User Data
const account1 = {
  owner: "Tobiloba Ibraheem",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 10000],
  interestRate: 1.2,
  pin: 5555,
  movementsDates: [
    "2022-04-23T07:42:02.383Z",
    "2022-04-28T09:15:04.904Z",
    "2022-05-15T21:31:17.178Z",
    "2022-05-18T10:17:24.185Z",
    "2022-06-08T14:11:59.604Z",
    "2022-06-27T17:01:17.194Z",
    "2022-07-17T23:36:17.929Z",
    "2022-07-18T10:51:36.790Z",
  ],
};

const account2 = {
  owner: "Samuel Jolayemi",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.5,
  pin: 1111,
  movementsDates: [
    "2022-04-23T07:42:02.383Z",
    "2022-04-28T09:15:04.904Z",
    "2022-05-15T21:31:17.178Z",
    "2022-05-18T10:17:24.185Z",
    "2022-06-08T14:11:59.604Z",
    "2022-06-27T17:01:17.194Z",
    "2022-07-17T23:36:17.929Z",
    "2022-07-18T10:51:36.790Z",
  ],
};

const account3 = {
  owner: "Iremide Mary",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.1,
  pin: 2222,
  movementsDates: [
    "2022-03-18T21:31:17.178Z",
    "2022-04-23T07:42:02.383Z",
    "2022-04-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2022-05-08T14:11:59.604Z",
    "2022-06-27T17:01:17.194Z",
    "2022-07-11T23:36:17.929Z",
    "2022-07-12T10:51:36.790Z",
  ],
};

const account4 = {
  owner: "Akinpelu Grace",
  transactions: [900, 150, -400, 3200, -650, -160, 1250, 1000],
  interestRate: 1.2,
  pin: 3333,
  movementsDates: [
    "2022-03-18T21:31:17.178Z",
    "2022-04-23T07:42:02.383Z",
    "2022-04-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2022-06-27T17:01:17.194Z",
    "2022-07-08T14:11:59.604Z",
    "2022-07-11T23:36:17.929Z",
    "2022-07-12T10:51:36.790Z",
  ],
};

const account5 = {
  owner: "Oluwatobi Akinpelu",
  transactions: [430, 1000, 7000, 50, 900, -1500],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2022-03-18T21:31:17.178Z",
    "2022-04-23T07:42:02.383Z",
    "2022-04-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2022-05-08T14:11:59.604Z",
    "2022-06-27T17:01:17.194Z",
    "2022-07-11T23:36:17.929Z",
    "2022-07-12T10:51:36.790Z",
  ],
};

const accounts = [account1, account2, account3, account4, account5];

// SELECTING ALL THE NECESSARY ELEMENTS

// Label
const labelBalance = document.querySelector(".account-balance");
const labelBalanceHide = document.querySelector(".balance-hide");
const labelBalanceIcon = document.querySelector(".balance-icon");

// Elements
const body = document.querySelector(".body");
const showMain = document.querySelector(".main");
const hideMain = document.querySelector(".main-form");
const showActivity = document.querySelectorAll(".activity__menu");
const activityContents = document.querySelectorAll(".activity-pop");
const containerMovements = document.querySelector(".movements");

// buttons
const loginBtn = document.querySelector(".login--button");
const btnDeposit = document.querySelector(".input__btn--deposit");
const btnTransfer = document.querySelector(".input__btn--transfer");
const btnClose = document.querySelector(".input__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// input value
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

//////////////////////////////////////////////////////////////////////////
// CREATING REUSABLE FUNCTIONS

// Creating UI update function
const updateUI = function (curAcc) {
  // Display transactions
  displayMovements(curAcc.transactions);

  // DisplayBalance
  calcDisplayBalance(curAcc.transactions);

  //DisplaySummary
  // calcDisplaySummary(curAcc.transactions);
};

const displayActivityMenu = function (e) {
  showActivity.forEach((activity) => {
    activity.addEventListener("click", function (e) {
      const name = activity.getAttribute("data-target");

      activityContents.forEach((contents) => {
        const target = contents.getAttribute("data-name");
        // Validating if the data attribute values are the same
        if (name == target) {
          contents.classList.add("show-menu");
          // making the body scroll if show-menu is in the classist od current elements
          if (contents.classList.contains("show-menu"))
            body.style.overflow = "hidden";
          contents.addEventListener("click", function (e) {
            if (e.target === contents) {
              contents.classList.remove("show-menu");
              body.style.overflow = "auto";
            }
          });
        } else {
          contents.classList.remove("show-menu");
        }
      });
    });
  });
};

//////////////////////////////////////////////////////////////////////////////
// IMPLEMENTING THE TRANSACTION MOVEMENTS
const displayMovements = function (cur) {
  containerMovements.innerHTML = "";
  currentAccount.transactions.forEach((cur) => {
    const type = cur > 0 ? "IN" : "OUT";
    const details = cur > 0 ? "Earnings" : "Expenses";

    const movementHTML = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${type}</div>
           <div class="movements__detail">${details}</div>
          <div class="movements__value movements__type--${type}">₦ ${cur}</div>
        </div>    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", movementHTML);
  });
};

/*//////////////////////////////////////////////////////////////////////*/
//  IMPLEMENTING THE BALANCE
const calcDisplayBalance = function (cur) {
  currentAccount.transactions = cur.reduce((acc, cur) => acc + cur, 0);
  labelBalance.innerHTML = `₦ ${currentAccount.transactions}`;

  // // Implementing Hide Balance
  labelBalanceIcon.addEventListener("click", function () {
    if ((labelBalance.innerHTML = `₦ ${account1.transactions}`)) {
      labelBalance.classList.toggle("active-balance");
      if (labelBalanceIcon.classList.contains("fa-eye")) {
        labelBalanceIcon.classList.toggle("fa-eye-slash");
      }
      if ((labelBalance.innerHTML = `₦ ${account1.transactions} `)) {
        labelBalanceHide.classList.toggle("active-balance");
      } else {
        labelBalanceHide.classList.remove("active-balance");
      }
    }
  });

  // Implementing account number copy
  const copyText = document.querySelector(" .account--number-btn");
  copyText.addEventListener("click", function () {
    const input = document.querySelector(".login--input--number");
    // selecting the value of the account number
    input.select();
    // copying the text
    document.execCommand("Copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      copyText.classList.remove("active");
    }, 2500);
  });
};

///////////////////////////////////////////////////////////////////
// Implementing Username for each account
const createUsernames = function (accounts) {
  accounts.forEach((cur) => {
    const pin = String(cur.pin).slice(0, 2);

    // creating a copy of the account1.owner property which owner property and set it to value.
    cur.username = `${cur.owner.split(" ")[0] + pin}`;
    console.log(cur.username);
  });
};
createUsernames(accounts);

//////////////////////////////////////////////////////////////////////
// IMPLEMENT LOGIN BUTTON
// Validating the Username and Pin
let currentAccount;

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Looking for the account that matches the username user input to the text field
  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value;
  });

  // if (
  //   currentAccount.username === inputLoginUsername.value &&
  //   currentAccount.pin === Number(inputLoginPin.value)
  // ) {
  //   // Update UI
  //   updateUI(currentAccount);
  // }
  // Display User Interface
  if (showMain.classList.contains("hide-main")) {
    showMain.classList.remove("hide-main");
    hideMain.classList.add("hide-main");
  }
  displayActivityMenu();
});
