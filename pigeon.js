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
  const totalDeposit = getInputNumber("depositAmount");

  updateSpanText("current-deposit", totalDeposit);
  //Working on current-balance
  updateSpanText("current-balance", totalDeposit);
  document.getElementById("depositAmount").value = "";
});
//withdraw button handler
const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdraw-amount");
  console.log(withdrawNumber);
});

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}

function updateSpanText(id, totalDeposit) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const MainBalance = currentNumber + totalDeposit;
  document.getElementById(id).innerText = MainBalance;
}
