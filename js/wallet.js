export default class Wallet {
  constructor() {
    this.euro_balance = 0;
    this.bitcoin_balance = 0;
  }

  getEuroBalance() {
    return this.euro_balance;
  }

  getBitcoinBalance() {
    return this.bitcoin_balance;
  }

  updateEuroBalance(amount) {
    this.euro_balance += amount;
  }

  updateBitcoinBalance(amount) {
    this.bitcoin_balance += amount;
  }
}