function transactionRow(transaction) {
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdDate = document.createElement("td");

  tdName.textContent = transaction.name;
  tdPrice.textContent = transaction.price;
  tdDate.textContent = new Date(transaction.transaction_date).toDateString();

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdDate);

  return tr;
}
