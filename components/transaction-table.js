/**
 * Our component needs to accept an array
 * and return the html table
 */

function transactionTable(transactions) {
  // needs to create the table
  /**
     * <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Transaction date</th>
            </tr>
        </table>
     */

  // creating all the elemnts
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const thPrice = document.createElement("th");
  const thDate = document.createElement("th");

  // adding header titles
  thName.textContent = "Name";
  thPrice.textContent = "Price";
  thDate.textContent = "Transaction date";

  // adding event listener to the transactions header
  thDate.addEventListener("click", sortByDate);
  thDate.className = "transaction-date";

  // collect the pieces
  table.appendChild(tr);
  tr.appendChild(thName);
  tr.appendChild(thPrice);
  tr.appendChild(thDate);

  // and handle looping
  transactions.forEach((transaction) => {
    const row = transactionRow(transaction);
    table.appendChild(row);
  });

  return table;
}
