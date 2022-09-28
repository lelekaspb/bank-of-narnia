async function filterByCreditcard(event) {
  event.preventDefault();

  const form = event.target;
  const creditcardChosen = form.elements.credit_card_company.value;

  if (creditcardChosen != "") {
    console.log("filter by " + creditcardChosen);
    const dataProxy = new TransactionProxy();
    const transactions = await dataProxy.getTransactions();

    // filter transactions
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.credit_card_company === creditcardChosen
    );
    console.log(filteredTransactions);

    const table = transactionTable(filteredTransactions);
    renderTable(table);
  }
}
