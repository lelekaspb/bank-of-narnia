function sortByDate() {
  ascendingOrder = !ascendingOrder;
  console.log(ascendingOrder);

  let transactionsToSort = [];
  if (filteredTransactions.length > 0) {
    transactionsToSort = filteredTransactions;
  } else {
    transactionsToSort = transactions;
  }

  // sort transactions by creditcard company name
  let sortedTransactions;
  if (ascendingOrder) {
    sortedTransactions = transactionsToSort.sort(sortAscending);
  } else {
    sortedTransactions = transactionsToSort.sort(sortDescending);
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
