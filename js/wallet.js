export default class Wallet {
  constructor() {
    this.wallet_element = null;
    this.bitcoin_element = null;
    this.bitcoin_element_amount = null;
    this.euro_element = null;
    this.euro_element_amount = null;

    this.euro_balance = 0;
    this.bitcoin_balance = 0;

    this.createWalletElement();
  }

  getEuroBalance() {
    return this.euro_balance;
  }

  getBitcoinBalance() {
    return this.bitcoin_balance;
  }

  updateBitcoinBalance(amount) {
    this.bitcoin_balance += amount;
    this.bitcoin_element_amount.textContent = this.bitcoin_balance.toFixed(8);
  }

  updateEuroBalance(amount) {
    this.euro_balance += amount;
    this.euro_element_amount.textContent = this.euro_balance.toFixed(2);
  }

  createWalletElement() {
    this.wallet_element = document.createElement('div');
    this.wallet_element.id = 'wallet';
    this.wallet_element.classList.add('__wallet__');

    this.createEuroBalanceElement();
    this.createBitcoinBalanceElement();
  }

  createBitcoinBalanceElement() {
    this.bitcoin_element = document.createElement('div');
    this.bitcoin_element.classList.add('balance');
    this.bitcoin_element.classList.add('bitcoin_balance');

    let bitcoin_placeholder = document.createElement('div');
    bitcoin_placeholder.textContent = 'Bitcoin (BTC):';

    this.bitcoin_element_amount = document.createElement('div');
    this.bitcoin_element_amount.id = 'bitcoin_amount';
    this.bitcoin_element_amount.textContent = this.bitcoin_balance.toFixed(8);
    
    this.bitcoin_element.appendChild(bitcoin_placeholder);
    this.bitcoin_element.appendChild(this.bitcoin_element_amount);
    this.wallet_element.appendChild(this.bitcoin_element);
  }

  createEuroBalanceElement() {
    this.euro_element = document.createElement('div');
    this.euro_element.classList.add('balance');
    this.euro_element.classList.add('euro_balance');

    let euro_placeholder = document.createElement('div');
    euro_placeholder.textContent = 'Euro (€):';

    this.euro_element_amount = document.createElement('div');
    this.euro_element_amount.id = 'euro_amount';
    this.euro_element_amount.textContent = this.euro_balance.toFixed(2);

    this.euro_element.appendChild(euro_placeholder);
    this.euro_element.appendChild(this.euro_element_amount);
    this.wallet_element.appendChild(this.euro_element);
  }
}