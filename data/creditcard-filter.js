async function filterByCreditcard(event) {
  event.preventDefault();

  const form = event.target;
  const creditcardChosen = form.elements.credit_card_company.value;

  if (creditcardChosen != "") {
    console.log("filter by " + creditcardChosen);

    // filter transactions
    filteredTransactions = transactions.filter(
      (transaction) => transaction.credit_card_company === creditcardChosen
    );

    const table = transactionTable(filteredTransactions);
    renderTable(table);
  }
}
