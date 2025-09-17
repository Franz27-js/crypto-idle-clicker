export default class Trading {
  constructor(wallet) {
    this.trading_element = null;

    // bitcoin
    this.bitcoin_kurs = 0.00001016;
    this.min_bitcoin = 0.00000816;
    this.max_bitcoin = 0.00001516;
    this.last_bitcoin = null;

    // helper classes
    this.wallet = wallet;

    // init trading
    this.createTradingElement();
  }

  convertBitcoinToEuro() {
    let bitcoins = this.wallet.getBitcoinBalance();
    let new_euro_balance = parseFloat((bitcoins / this.bitcoin_kurs).toFixed(2));

    this.wallet.updateBitcoinBalance(-bitcoins);
    this.wallet.updateEuroBalance(new_euro_balance);
  }

  convertEuroToBitcoin() {
    let euros = this.wallet.getEuroBalance();
    let new_bitcoin_balance = parseFloat((euros * this.bitcoin_kurs).toFixed(8));

    this.wallet.updateEuroBalance(-euros);
    this.wallet.updateBitcoinBalance(new_bitcoin_balance);
  }

  createTradingElement() {
    this.trading_element = document.createElement('div');
    this.trading_element.classList.add('__trading__');
  }
}