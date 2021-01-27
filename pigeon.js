//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transectionArea = document.getElementById("transection-area");
  transectionArea.style.display = "block";
});
//Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const totalDeposit = parseFloat(depositAmount);
  //taking deposit value
  // const currentDeposit = document.getElementById("current-deposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("current-deposit").innerText = totalDeposit;
  updateSpanText("current-deposit", totalDeposit);

  //Working on current-balance
  updateSpanText("current-balance", totalDeposit);

  document.getElementById("depositAmount").value = "";
  // const currentBalance = document.getElementById("current-balance").innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);
  // const totalMainBalance = currentBalanceNumber + totalDeposit;
  // document.getElementById("current-balance").innerText = totalMainBalance;
});

function updateSpanText(id, totalDeposit) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalMainBalance = currentBalanceNumber + totalDeposit;
  document.getElementById(id).innerText = totalMainBalance;
}
