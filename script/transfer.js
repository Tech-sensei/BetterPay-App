import * as loginData from "./login.js";
import * as userData from "./data.js";
import { displayActivityMenu } from "./reusable.js";
import { updateUI } from "./reusable.js";


///////////////////////////////////////////////////////////////////////////////////////
// IMPLEMENTING TRANSFER
export const transferActivityFunction = function () {
  userData.btnTransfer.addEventListener("click", function (e) {
    const amount = +userData.inputTransferAmount.value;
    const receiverName = userData.accounts.find((acc) => {
      return acc.owner === userData.inputTransferTo.value;
    });
    const receiverNum = userData.accounts.find((acc) => {
      return acc?.accountNumber === +userData.inputTransferNumber.value;
    });
    e.preventDefault();

    userData.inputTransferAmount.value =
      userData.inputTransferTo.value =
      userData.inputTransferNumber.value =
        "";
    // console.log(receiverName, receiverNum, amount);
    if (
      amount > 0 &&
      receiverName &&
      receiverNum &&
      loginData.currentAccount?.balance >= amount &&
      receiverName?.username !== loginData.currentAccount.username &&
      receiverNum?.accountNumber !== loginData.currentAccount.accountNumber
    ) {
      // Add Transactions
      loginData.currentAccount.transactions.push(-amount);
      receiverName.transactions.push(amount);

      // Add transfer date
      loginData.currentAccount.movementsDates.push(new Date().toISOString());
      receiverName.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(loginData.currentAccount);
    }

    const transferValidation = function (e) {
      if (amount <= 0) {
        userData.inputTransferAmount.classList.add("error");
        userData.labelTransferAmount.innerHTML = `<label style="color:red;"> Amount must be greater than ₦0! </label>`;
      }
      setTimeout(() => {
        userData.labelTransferAmount.innerHTML = `<label> How much would you like to send?</label>`;
        return userData.inputTransferAmount.classList.remove("error");
      }, 2500);

      if (loginData.currentAccount?.balance < amount) {
        userData.inputTransferAmount.classList.add("error");
        userData.labelTransferAmount.innerHTML = `<label style="color:red;"> Insufficient Funds! </label>`;
      }
      setTimeout(() => {
        userData.labelTransferAmount.innerHTML = `<label> How much would you like to send?</label>`;
        return userData.inputTransferAmount.classList.remove("error");
      }, 2500);

      if (!receiverName) {
        userData.labelTransferTo.innerHTML = `<label style="color:red;">Account do not exist! </label>`;
        userData.inputTransferTo.classList.add("error");
      }
      setTimeout(() => {
        userData.labelTransferTo.innerHTML = `<label> Type the selected account </label>`;
        return userData.inputTransferTo.classList.remove("error");
      }, 2500);

      if (receiverName?.username === loginData.currentAccount.username) {
        userData.labelTransferTo.innerHTML = `<label style="color:red;"> Cannot send money to yourself! </label>`;
        userData.inputTransferTo.classList.add("error");
      }
      setTimeout(() => {
        userData.labelTransferTo.innerHTML = `<label> Type the selected account </label>`;
        return userData.inputTransferTo.classList.remove("error");
      }, 2500);

      if (!receiverNum || +userData.inputTransferNumber.value === 0) {
        userData.labelTransferNumber.innerHTML = `<label style="color:red;"> Could not find account with that number! </label>`;
        userData.inputTransferNumber.classList.add("error");
      }
      setTimeout(() => {
        userData.labelTransferNumber.innerHTML = `<label> Account number of the receiver </label>`;
        return userData.inputTransferNumber.classList.remove("error");
      }, 2500);

      if (
        receiverNum?.accountNumber === loginData.currentAccount.accountNumber
      ) {
        userData.labelTransferNumber.innerHTML = `<label style="color:red;"> Cannot send money to yourself! </label>`;
        userData.inputTransferNumber.classList.add("error");
      }
      setTimeout(() => {
        userData.labelTransferNumber.innerHTML = `<label> Account number of the receiver </label>`;
        return userData.inputTransferNumber.classList.remove("error");
      }, 2500);
    };

    transferValidation();
  });
};

transferActivityFunction();

// const receiverNum = userData.accounts.find((acc) => {
//   return acc.accountNumber === +userData.inputTransferNumber.value;
// });
// console.log(receiverNum);
