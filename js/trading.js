export default class Trading {
  constructor(wallet) {
    this.trading_element = null;
    this.trading_bitcoin_sell_button = null;
    this.trading_bitcoin_buy_button = null;

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

    let trade_bit_con = document.createElement('div');
    trade_bit_con.classList.add('bitcoin-container');

    this.createTradeBitcoinButtons();

    trade_bit_con.appendChild(this.trading_bitcoin_buy_button);
    trade_bit_con.appendChild(this.trading_bitcoin_sell_button);
    this.trading_element.appendChild(trade_bit_con);
  }

  createTradeBitcoinButtons() {
    this.trading_bitcoin_sell_button = document.createElement('div');
    this.trading_bitcoin_sell_button.classList.add('button-trading');
    this.trading_bitcoin_sell_button.classList.add('button-sell');
    this.trading_bitcoin_sell_button.textContent = 'Sell BTC';

    this.trading_bitcoin_buy_button = document.createElement('div');
    this.trading_bitcoin_buy_button.classList.add('button-trading');
    this.trading_bitcoin_buy_button.classList.add('button-buy');
    this.trading_bitcoin_buy_button.textContent = 'Buy BTC';
  }
}