// PascalCase vs camelCase

// create a transaction proxy
// either as Class or Function
class TransactionProxy {
  constructor() {}

  // set transactions(data) {
  //   this.transactions = data;
  // }

  // get transactions() {
  //   return this.transactions;
  // }

  async getTransactions() {
    const data = await getLocalTransactions();
    return data;
  }
}
// constructor example
// const transactionProxy = new TransactionProxy();
