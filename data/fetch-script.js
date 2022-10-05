// https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/transactions.json
async function getTransactionsFromServer() {
  const url =
    "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/transactions.json";

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(url, options);
    const transactions = await response.json();
    console.log(Object.values(transactions));
    return Object.values(transactions);
  } catch (err) {
    console.error(err);
  }
}
