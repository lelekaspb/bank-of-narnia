// PascalCase vs camelCase

// create a transaction proxy
// either as Class or Function
class TransactionProxy {
  constructor() {}

  async getTransactions() {
    const data = await getLocalTransactions();
    return data;
  }
}
// constructor example
// const transactionProxy = new TransactionProxy();
