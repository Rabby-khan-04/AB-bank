document.querySelector("#withdraw-btn").addEventListener("click", () => {
  const totalWithdrawStr = document.querySelector("#total-withdraw");

  const totalWithdraw = Number(totalWithdrawStr.innerText);

  const withdrawField = document.querySelector("#withdraw-field");
  const withdrawAmount = Number(withdrawField.value);

  const totalBalance = document.querySelector("#balance");
  const totalAmount = Number(totalBalance.innerText);

  if (withdrawAmount <= totalAmount) {
    const totalAmountWithdraw = totalWithdraw + withdrawAmount;

    totalWithdrawStr.innerText = totalAmountWithdraw;
    withdrawField.value = "";

    const currentBalance = totalAmount - withdrawAmount;

    totalBalance.innerText = currentBalance;
  } else alert("Baper Bank A Porjapto Poriman Taka Nai. Income Suru Koran");
});
