async function sortByDate() {
  ascendingOrder = !ascendingOrder;
  console.log(ascendingOrder);

  const dataProxy = new TransactionProxy();
  const transactions = await dataProxy.getTransactions();
  //const transactions = dataProxy.transactions();

  // sort transactions by creditcard company name
  let sortedTransactions;
  if (ascendingOrder) {
    sortedTransactions = transactions.sort(sortAscending);
  } else {
    sortedTransactions = transactions.sort(sortDescending);
  }

  const table = transactionTable(sortedTransactions);
  renderTable(table);
}

function sortAscending(a, b) {
  if (new Date(a.transaction_date) < new Date(b.transaction_date)) {
    return -1;
  }

  if (new Date(a.transaction_date) > new Date(b.transaction_date)) {
    return 1;
  }
  return 0;
}

function sortDescending(a, b) {
  if (new Date(a.transaction_date) < new Date(b.transaction_date)) {
    return 1;
  }

  if (new Date(a.transaction_date) > new Date(b.transaction_date)) {
    return -1;
  }
  return 0;
}
