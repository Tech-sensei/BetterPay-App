///////////////////////////////////////////////////////////////////////////////////////////
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

export const accounts = [account1, account2, account3, account4, account5];

// SELECTING ALL THE NECESSARY ELEMENTS

// Label
export const labelWelcome = document.querySelector(".welcome");
export const labelBalance = document.querySelector(".account-balance");
export const labelBalanceHide = document.querySelector(".balance-hide");
export const labelBalanceIcon = document.querySelector(".balance-icon");
export const labelDate = document.querySelector(".account-status");
export const labelTransferTo = document.querySelector(".label__account--transfer");
export const labelTransferNumber = document.querySelector(".label__number--transfer");
export const labelTransferAmount = document.querySelector(".label__amount--transfer");

// Elements
export const body = document.querySelector(".body");
export const showMain = document.querySelector(".main");
export const hideMain = document.querySelector(".main-form");
export const showActivity = document.querySelectorAll(".activity__menu");
export const activityContents = document.querySelectorAll(".activity-pop");
export const containerMovements = document.querySelector(".movements");

// buttons
export const loginBtn = document.querySelector(".login--button");
export const btnDeposit = document.querySelector(".input__btn--deposit");
export const btnTransfer = document.querySelector(".input__btn--transfer");
export const btnAirtime = document.querySelector(".input__btn--airtime");
// export const btnSort = document.querySelector(".btn--sort");

// input value
export const inputLoginUsername = document.querySelector(".login__input--user");
export const inputLoginPin = document.querySelector(".login__input--pin");

export const inputDepositAmount = document.querySelector(".input__amount--deposit");

export const inputTransferTo = document.querySelector(".input__account--transfer");
export const inputTransferNumber = document.querySelector(".input__number--transfer");
export const inputTransferAmount = document.querySelector(".input__amount--transfer");

export const inputAirtimeNumber = document.querySelector(".input__number--airtime");
export const inputAirtimeAmount = document.querySelector(".input__amount--airtime");

export const inputBillAmount = document.querySelector(".input__amount--paybill");
