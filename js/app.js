// import and init all modules
import Wallet from "./wallet.js";
import Level from "./level.js";
import Console from "./console.js";
import Trading from "./trading.js";

const wallet_instance = new Wallet();
const level_instance = new Level(wallet_instance);
const trading_instance = new Trading(wallet_instance);
const console_instance = new Console('console_1', wallet_instance, level_instance);

let content_container_column_left_inner = document.createElement('div');
content_container_column_left_inner.classList.add('content_container_column_left_inner');
content_container_column_left_inner.appendChild(wallet_instance.wallet_element);
content_container_column_left_inner.appendChild(trading_instance.trading_element);
document.querySelector('.content_container_column_left').appendChild(content_container_column_left_inner);
document.querySelector('.content_container_column_left').appendChild(console_instance.console_element);