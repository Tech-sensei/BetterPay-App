"use strict";

////////////////////////////////////////////////////////////////////////////////////////////
// User Data
const account1 = {
  owner: "Tobiloba Ibraheem",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 10000],
  interestRate: 1.2,
  pin: 5555,
  accountNumber: 2377742613,
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
  accountNumber: 1111111111,
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
  accountNumber: 3105109744,
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
  owner: "Grace Akinpelu",
  transactions: [900, 150, -400, 3200, -650, -160, 1250, 1000],
  interestRate: 1.2,
  pin: 3333,
  accountNumber: 3333333333,
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
  accountNumber: 8140765477,
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
const labelWelcome = document.querySelector(".welcome");
const labelBalance = document.querySelector(".account-balance");
const labelBalanceHide = document.querySelector(".balance-hide");
const labelBalanceIcon = document.querySelector(".balance-icon");
const labelDate = document.querySelector(".account-status");
console.log(labelDate);
const labelTransferTo = document.querySelector(".label__account--transfer");
const labelTransferNumber = document.querySelector(".label__number--transfer");
const labelTransferAmount = document.querySelector(".label__amount--transfer");

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
const btnAirtime = document.querySelector(".input__btn--airtime");
// const btnSort = document.querySelector(".btn--sort");

// input value
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

const inputDepositAmount = document.querySelector(".input__amount--deposit");

const inputTransferTo = document.querySelector(".input__account--transfer");
const inputTransferNumber = document.querySelector(".input__number--transfer");
const inputTransferAmount = document.querySelector(".input__amount--transfer");

const inputAirtimeNumber = document.querySelector(".input__number--airtime");
const inputAirtimeAmount = document.querySelector(".input__amount--airtime");

const inputBillAmount = document.querySelector(".input__amount--paybill");

//////////////////////////////////////////////////////////////////////////
// CREATING REUSABLE FUNCTIONS
// Implementing Transactions Date
const locale = navigator.language;

const formatDate = function (now, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), now);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${now.getDate()}`.padStart(2, 0);
  // const month = `${now.getMonth() + 1}`.padStart(2, 0);
  // const year = now.getFullYear();
  return new Intl.DateTimeFormat(locale).format(now);
};

// Creating UI update function
const updateUI = function (curAcc) {
  // Display transactions
  displayMovements(curAcc);

  // DisplayBalance
  calcDisplayBalance(curAcc);

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
  cur.transactions.forEach((mov, i) => {
    const type = mov > 0 ? "IN" : "OUT";
    const details = mov > 0 ? "Earnings" : "Expenses";

    const now = new Date(cur.movementsDates[i]);
    const date = formatDate(now, locale);

    const movementHTML = `
    <div class="movements__row">
          <div class="movements__date">${date}</div>
          <div class="movements__type movements__type--${type}">${type}</div>
           <div class="movements__detail">${details}</div>
          <div class="movements__value movements__type--${type}">₦ ${mov}</div>
        </div>    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", movementHTML);
  });
};

/*//////////////////////////////////////////////////////////////////////*/
//  IMPLEMENTING THE BALANCE
const calcDisplayBalance = function (cur) {
  cur.balance = cur.transactions.reduce((acc, cur) => acc + cur, 0);
  labelBalance.innerHTML = `₦ ${cur.balance}`;

  // // Implementing Hide Balance
  labelBalanceIcon.addEventListener("click", function () {
    if ((labelBalance.innerHTML = `₦ ${currentAccount.balance}`)) {
      labelBalance.classList.toggle("active-balance");
      if (labelBalanceIcon.classList.contains("fa-eye")) {
        labelBalanceIcon.classList.toggle("fa-eye-slash");
      }
      if ((labelBalance.innerHTML = `₦ ${currentAccount.balance} `)) {
        labelBalanceHide.classList.toggle("active-balance");
      } else {
        labelBalanceHide.classList.remove("active-balance");
      }
    }
  });

  // Implementing account number copy
  const copyText = document.querySelector(" .account--number-btn");
  copyText.addEventListener("click", function () {
    const input = document.querySelector(".input__account--number");
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
  labelDate.innerHTML = new Intl.DateTimeFormat(locale, options).format(date);

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // Looking for the account that matches the username user input to the text field
  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value;
  });

  if (
    currentAccount?.username === inputLoginUsername.value &&
    currentAccount?.pin === +inputLoginPin.value
  ) {
    // Display UI and message
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(" ")[0]}`;
    labelAccountNumber.value = `${currentAccount.accountNumber}`;
    console.log(labelAccountNumber.value);
    // Update UI
    updateUI(currentAccount);
    // Display User Interface
    if (showMain.classList.contains("hide-main")) {
      showMain.classList.remove("hide-main");
      hideMain.classList.add("hide-main");
    }
    displayActivityMenu();
  }
});

// IMPLEMENTING DEPOSIT
btnDeposit.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputDepositAmount.value);
  const label = document.querySelector(".label-deposit");
  if (amount > 0) {
    // Add Transaction list
    currentAccount.transactions.push(amount);

    // Add Deposit date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  } else if (amount <= 0) {
    inputDepositAmount.classList.add("error");
    label.innerHTML = `<label style="color:red;"> Amount must be greater than ₦0! </label>`;
  }
  setTimeout(() => {
    label.innerHTML = `<label> How much would you like to add?</label>`;
    return inputDepositAmount.classList.remove("error");
  }, 2500);
  inputDepositAmount.value = "";
});

// IMPLEMENTING TRANSFER
btnTransfer.addEventListener("click", function (e) {
  const amount = +inputTransferAmount.value;
  const receiverName = accounts.find((acc) => {
    return acc.owner === inputTransferTo.value;
  });
  const receiverNum = accounts.find((acc) => {
    return acc.accountNumber === +inputTransferNumber.value;
  });
  e.preventDefault();

  inputTransferAmount.value =
    inputTransferTo.value =
    inputTransferNumber.value =
      "";
  // console.log(receiverName, receiverNum, amount);
  if (
    amount > 0 &&
    receiverName &&
    receiverNum &&
    currentAccount.balance >= amount &&
    receiverName.username !== currentAccount.username &&
    receiverNum.accountNumber !== currentAccount.accountNumber
  ) {
    // Add Transactions
    currentAccount.transactions.push(-amount);
    receiverName.transactions.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverName.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }

  const transferValidation = function (e) {
    if (amount <= 0) {
      inputTransferAmount.classList.add("error");
      labelTransferAmount.innerHTML = `<label style="color:red;"> Amount must be greater than ₦0! </label>`;
    }
    setTimeout(() => {
      labelTransferAmount.innerHTML = `<label> How much would you like to send?</label>`;
      return inputTransferAmount.classList.remove("error");
    }, 2500);

    if (currentAccount.balance < amount) {
      inputTransferAmount.classList.add("error");
      labelTransferAmount.innerHTML = `<label style="color:red;"> Insufficient Funds! </label>`;
    }
    setTimeout(() => {
      labelTransferAmount.innerHTML = `<label> How much would you like to send?</label>`;
      return inputTransferAmount.classList.remove("error");
    }, 2500);

    if (!receiverName) {
      labelTransferTo.innerHTML = `<label style="color:red;">Account do not exist! </label>`;
      inputTransferTo.classList.add("error");
    }
    setTimeout(() => {
      labelTransferTo.innerHTML = `<label> Type the selected account </label>`;
      return inputTransferTo.classList.remove("error");
    }, 2500);

    if (receiverName.username == currentAccount.username) {
      labelTransferTo.innerHTML = `<label style="color:red;"> Cannot send money to yourself! </label>`;
      inputTransferTo.classList.add("error");
    }
    setTimeout(() => {
      labelTransferTo.innerHTML = `<label> Type the selected account </label>`;
      return inputTransferTo.classList.remove("error");
    }, 2500);

    if (!receiverNum) {
      labelTransferNumber.innerHTML = `<label style="color:red;"> Could not find account with that number! </label>`;
      inputTransferNumber.classList.add("error");
    }
    setTimeout(() => {
      labelTransferNumber.innerHTML = `<label> Account number of the receiver </label>`;
      return inputTransferNumber.classList.remove("error");
    }, 2500);

    if (receiverNum.accountNumber == currentAccount.accountNumber) {
      labelTransferNumber.innerHTML = `<label style="color:red;"> Cannot send money to yourself! </label>`;
      inputTransferNumber.classList.add("error");
    }
    setTimeout(() => {
      labelTransferNumber.innerHTML = `<label> Account number of the receiver </label>`;
      return inputTransferNumber.classList.remove("error");
    }, 2500);
  };

  transferValidation();

  // else {
  //   allInputAmount.forEach((cur) => cur.classList.add("error"));
  // }
  // setTimeout(() => {
  //   allInputAmount.forEach((cur) => cur.classList.remove("error"));
  // }, 1500);
});

// IMPLEMENTING AIRTIME PURCHASE
btnAirtime.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputAirtimeAmount.value);
  let number = +inputAirtimeNumber.value;
  console.log();
  const labelAirtimeNumber = document.querySelector(".label__number--airtime");
  const labelAirtimeAmount = document.querySelector(".label__amount--airtime");
  if (
    amount >= 50 &&
    Number.isInteger(number) &&
    String(number).length === 11
  ) {
    // Add Transaction list
    currentAccount.transactions.push(-amount);

    // Add Airtime date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  if (amount <= 50 || amount >= 100000) {
    inputAirtimeAmount.classList.add("error");
    labelAirtimeAmount.innerHTML = `<label style="color:red;"> Amount must be ₦50 - 100000 </label>`;
  }
  setTimeout(() => {
    labelAirtimeAmount.innerHTML = `<label> How much would you like to buy?</label>`;
    return inputAirtimeAmount.classList.remove("error");
  }, 2500);

  if (!Number.isInteger(number) || inputAirtimeNumber.value === "") {
    inputAirtimeNumber.classList.add("error");
    labelAirtimeNumber.innerHTML = `<label style="color:red;"> Enter a valid number!</label>`;
  }
  setTimeout(() => {
    labelAirtimeNumber.innerHTML = `<label>Remember to buy for love ones😉</label>`;
    return inputAirtimeNumber.classList.remove("error");
  }, 2500);

  if (String(number).length < 11) {
    inputAirtimeNumber.classList.add("error");
    labelAirtimeNumber.innerHTML = `<label style="color:red;">Number must be 11 characters</label>`;
  }
  setTimeout(() => {
    labelAirtimeNumber.innerHTML = `<label>Remember to buy for love ones😉</label>`;
    return inputAirtimeNumber.classList.remove("error");
  }, 2500);

  inputAirtimeNumber.value = inputAirtimeAmount.value = "";
});

// Declaring all the the variables
const loginUserName = document.querySelector(".login__input--user");
const loginPassword = document.querySelector(".login__input--pin");
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
