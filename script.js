let ascendingOrder = true;

window.addEventListener("load", async () => {
  const dataProxy = new TransactionProxy();
  const transactions = await dataProxy.getTransactions();
  console.log(transactions);

  const table = transactionTable(transactions);
  renderTable(table);

  const creditCardCompanies = [
    ...new Set(transactions.map((data) => data.credit_card_company)),
  ];
  console.log(creditCardCompanies);

  const radioButtonsSection = radioSection(creditCardCompanies);
  renderRadioButtons(radioButtonsSection);
});
