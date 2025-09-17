// import and init all modules
import Wallet from "./wallet.js";
import Level from "./level.js";
import Console from "./console.js";
import Trading from "./trading.js";

const wallet_instance = new Wallet();
const level_instance = new Level(wallet_instance);
const console_instance = new Console('console_1', wallet_instance, level_instance);
const trading_instance = new Trading(wallet_instance);