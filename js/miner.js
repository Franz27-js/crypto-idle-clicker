export default class Miner {
  constructor(name = 'Miner x', coin = 'MyCoin') {
    this.name = name;
    this.coin = coin;
    this.coins_generated = 0;
    this.multiplier = 1;
    this.kurs = 0.00001016; //* coins per click (0.00001016 BTC = 1€)
    this.click_value_min = 1; // how many coins per click
    this.click_value_max = 12; // how many coins per click
  }

  getName() {
    return this.name;
  }

  getCoinsGenerated() {
    return this.coins_generated;
  }

  setMultiplier(new_multiplier) {
    this.multiplier = new_multiplier;
  }

  setGenerationRate(new_rate) {
    this.generation_rate = new_rate;
  }

  setClickValue(min_value, max_value) {
    this.click_value_min = min_value;
    this.click_value_max = max_value;
  }

  generateCoin() {
    let click_euro = Math.floor(Math.random() * this.click_value_max) + this.click_value_min;
    let converted_btc = parseFloat((click_euro * this.kurs).toFixed(8));

    this.coins_generated += parseFloat((converted_btc * this.multiplier).toFixed(8));

    return parseFloat((converted_btc * this.multiplier).toFixed(8));
  }
}