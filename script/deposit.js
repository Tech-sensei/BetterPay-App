import * as loginData from "./login.js";
import * as userData from "./data.js";
import { displayActivityMenu } from "./reusable.js";
import { updateUI } from "./reusable.js";

// IMPLEMENTING DEPOSIT
export const depositActivityFunction = function () {
  userData.btnDeposit.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Math.floor(userData.inputDepositAmount.value);
    const label = document.querySelector(".label-deposit");
    if (amount > 0) {
      // Add Transaction list
      loginData.currentAccount.transactions.push(amount);

      // Add Deposit date
      loginData.currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(loginData.currentAccount);
    } else if (amount <= 0) {
      userData.inputDepositAmount.classList.add("error");
      label.innerHTML = `<label style="color:red;"> Amount must be greater than ₦0! </label>`;
    }
    setTimeout(() => {
      label.innerHTML = `<label> How much would you like to add?</label>`;
      return userData.inputDepositAmount.classList.remove("error");
    }, 2500);
    userData.inputDepositAmount.value = "";
  });
};

depositActivityFunction()