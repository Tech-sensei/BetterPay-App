import * as userData from "./data.js";
export const displayActivityMenu = function (e) {
  userData.showActivity.forEach((activity) => {
    activity.addEventListener("click", function (e) {
      const name = activity.getAttribute("data-target");

      userData.activityContents.forEach((contents) => {
        const target = contents.getAttribute("data-name");
        // Validating if the data attribute values are the same
        if (name == target) {
          contents.classList.add("show-menu");
          // making the body scroll if show-menu is in the classist od current elements
          if (contents.classList.contains("show-menu"))
            userData.body.style.overflow = "hidden";
          contents.addEventListener("click", function (e) {
            if (e.target === contents) {
              contents.classList.remove("show-menu");
              userData.body.style.overflow = "auto";
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
// IMPLEMENTING LOCAL DATE for each transaction
const locale = navigator.language;
const formatDate = function (now, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), now);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${now.getDate()}`.padStart(2, 0);
  // const month = `${now.getMonth() + 1}`.padStart(2, 0);
  // const year = now.getFullYear();
  return new Intl.DateTimeFormat(locale).format(now);
};

// CREATING CURRENCY FORMAT
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
  }).format(value);
};

//////////////////////////////////////////////////////////////////////////////
// IMPLEMENTING THE TRANSACTION MOVEMENTS
const displayMovements = function (cur) {
  userData.containerMovements.innerHTML = "";
  cur.transactions.forEach((mov, i) => {
    const type = mov > 0 ? "IN" : "OUT";
    const details = mov > 0 ? "Earnings" : "Expenses";

    const now = new Date(cur.movementsDates[i]);
    const date = formatDate(now, locale);
    const formattedMov = formatCur(mov, "en-NG", "NGN");

    const movementHTML = `
    <div class="movements__row">
          <div class="movements__date">${date}</div>
          <div class="movements__type movements__type--${type}">${type}</div>
           <div class="movements__detail">${details}</div>
          <div class="movements__value movements__type--${type}">${formattedMov}</div>
        </div>    
    `;
    userData.containerMovements.insertAdjacentHTML("afterbegin", movementHTML);
  });
};

/*//////////////////////////////////////////////////////////////////////*/
//  IMPLEMENTING THE BALANCE
const calcDisplayBalance = function (cur) {
  cur.balance = cur.transactions.reduce((acc, cur) => acc + cur, 0);
  userData.labelBalance.innerHTML = `₦ ${cur.balance}`;

  // // Implementing Hide Balance
  userData.labelBalanceIcon.addEventListener("click", function () {
    if ((userData.labelBalance.innerHTML = `₦ ${cur.balance}`)) {
      userData.labelBalance.classList.toggle("active-balance");
      if (userData.labelBalanceIcon.classList.contains("fa-eye")) {
        userData.labelBalanceIcon.classList.toggle("fa-eye-slash");
      }
      if ((userData.labelBalance.innerHTML = `₦ ${cur.balance} `)) {
        userData.labelBalanceHide.classList.toggle("active-balance");
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

// Creating UI update function
export const updateUI = function (curAcc) {
  // Display transactions
  displayMovements(curAcc);

  // DisplayBalance
  calcDisplayBalance(curAcc);

  //DisplaySummary
  // calcDisplaySummary(curAcc.transactions);
};
