// import and init all modules
import Console from "./console.js";
import Wallet from "./wallet.js";

const wallet_instance = new Wallet();
const console_instance = new Console('console_1', wallet_instance);