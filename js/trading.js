export default class Trading {
  constructor(wallet) {
    this.bitcoin_kurs = 0.00001016;
    this.min_bitcoin = 0.00000816;
    this.max_bitcoin = 0.00001516;
    this.last_bitcoin = null;

    this.wallet = wallet;
  }

  convertBitcoinToEuro() {
    let bitcoins = this.wallet.getBitcoinBalance();
    let new_euro_balance = parseFloat((bitcoins / this.bitcoin_kurs).toFixed(2));

    this.wallet.updateBitcoinBalance(-bitcoins);
    this.wallet.updateEuroBalance(new_euro_balance);
  }
}