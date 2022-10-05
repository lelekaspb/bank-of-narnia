// PascalCase vs camelCase

// create a transaction proxy
// either as Class or Function
class TransactionProxy {
  constructor() {}

  async getTransactions() {
    let data = [];
    data = await getTransactionsFromServer();
    if (!data) {
      data = await getLocalTransactions();
    }
    return data;
  }
}
