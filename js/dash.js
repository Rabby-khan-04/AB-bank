document.querySelector("#diposit-btn").addEventListener("click", () => {
  const dipositField = document.querySelector("#diposit-amount");
  const dipositAmount = Number(dipositField.value);

  const totalDipositElement = document.querySelector("#total-diposit");
  const totalDiposit = Number(totalDipositElement.innerText);

  const totalDipositAmount = totalDiposit + dipositAmount;

  totalDipositElement.innerText = totalDipositAmount;

  dipositField.value = "";
  const currentBalance = document.querySelector("#balance");

  const currentBalanceAmount = Number(currentBalance.innerText);

  const totalBalance = currentBalanceAmount + dipositAmount;

  currentBalance.innerText = totalBalance;
});
