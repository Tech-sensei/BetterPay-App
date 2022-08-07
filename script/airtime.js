import * as loginData from "./login.js";
import * as userData from "./data.js";
import { displayActivityMenu } from "./reusable.js";
import { updateUI } from "./reusable.js";


////////////////////////////////////////////////////////////////////////
export const airtimeActivityFunction = function () {
  // IMPLEMENTING AIRTIME PURCHASE
  userData.btnAirtime.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Math.floor(userData.inputAirtimeAmount.value);
    let number = +userData.inputAirtimeNumber.value;
    console.log();
    const labelAirtimeNumber = document.querySelector(
      ".label__number--airtime"
    );
    const labelAirtimeAmount = document.querySelector(
      ".label__amount--airtime"
    );
    if (
      amount >= 50 &&
      Number.isInteger(number) &&
      String(number).length === 11
    ) {
      // Add Transaction list
      loginData.currentAccount.transactions.push(-amount);

      // Add Airtime date
      loginData.currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(loginData.currentAccount);
    }
    if (amount <= 50 || amount >= 100000) {
      userData.inputAirtimeAmount.classList.add("error");
      labelAirtimeAmount.innerHTML = `<label style="color:red;"> Amount must be ₦50 - 100000 </label>`;
    }
    setTimeout(() => {
      labelAirtimeAmount.innerHTML = `<label> How much would you like to buy?</label>`;
      return userData.inputAirtimeAmount.classList.remove("error");
    }, 2500);

    if (!Number.isInteger(number) || userData.inputAirtimeNumber.value === "") {
      userData.inputAirtimeNumber.classList.add("error");
      labelAirtimeNumber.innerHTML = `<label style="color:red;"> Enter a valid number!</label>`;
    }
    setTimeout(() => {
      labelAirtimeNumber.innerHTML = `<label>Remember to buy for love ones😉</label>`;
      return userData.inputAirtimeNumber.classList.remove("error");
    }, 2500);

    if (String(number).length < 11) {
      userData.inputAirtimeNumber.classList.add("error");
      labelAirtimeNumber.innerHTML = `<label style="color:red;">Number must be 11 characters</label>`;
    }
    setTimeout(() => {
      labelAirtimeNumber.innerHTML = `<label>Remember to buy for love ones😉</label>`;
      return userData.inputAirtimeNumber.classList.remove("error");
    }, 2500);

    userData.inputAirtimeNumber.value = userData.inputAirtimeAmount.value = "";
  });
}
airtimeActivityFunction()