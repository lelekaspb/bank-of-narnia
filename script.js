let ascendingOrder = true;
let transactions = [];
let filteredTransactions = [];

window.addEventListener("load", async () => {
  const dataProxy = new TransactionProxy();
  transactions = await dataProxy.getTransactions();

  const table = transactionTable(transactions);
  renderTable(table);

  const creditCardCompanies = [
    ...new Set(transactions.map((data) => data.credit_card_company)),
  ];
  console.log(creditCardCompanies);

  const radioButtonsSection = radioSection(creditCardCompanies);
  renderRadioButtons(radioButtonsSection);
});
