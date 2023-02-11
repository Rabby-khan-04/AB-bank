document.querySelector("#withdraw-btn").addEventListener("click", () => {
  const totalWithdrawStr = document.querySelector("#total-withdraw");

  const totalWithdraw = Number(totalWithdrawStr.innerText);

  const withdrawField = document.querySelector("#withdraw-field");

  const withdrawAmount = Number(withdrawField.value);

  const totalAmountWithdraw = totalWithdraw + withdrawAmount;

  totalWithdrawStr.innerText = totalAmountWithdraw;
  withdrawField.value = "";

  const totalBalance = document.querySelector("#balance");
  const totalAmount = Number(totalBalance.innerText);

  const currentBalance = totalAmount - withdrawAmount;

  totalBalance.innerText = currentBalance;
});
