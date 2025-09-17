import Miner from './miner.js';

export default class Console {
  constructor(console_id, wallet, level) {
    // console elements
    this.console_id = console_id;
    this.console_element = null;
    this.top_bar = null;
    this.message_container = null;
    this.promt_placeholder = null;
    this.promt_content = null;

    // console helper variables
    this.clicks = 0;
    this.max_messages = 300;
    this.console_active = true;

    // init console
    this.createConsoleElement();
    this.setStartMessages();

    // helper classes
    this.miner = new Miner('Bitcoin Miner');
    this.createInfoMessage(`Miner '${this.miner.name}' initialized`);
    this.wallet = wallet;
    this.createInfoMessage(`Wallet initialized`);
    this.level = level;
  }

  getClicks() {
    return this.clicks;
  }

  setPromtContent(new_content) {
    this.promt_content.textContent = new_content;
  }

  setPromtPlaceholder(user, server) {
    this.promt_placeholder.textContent = `${user}@${server}:~$ `;
  }

  setStartMessages() {
    this.createLogMessage('Console initialized');
    this.createLogMessage(`Console element ID: ${this.console_id}`);
  }

  updatePromtContent(added_content) {
    this.promt_content.textContent += added_content;
  }

  showConsole() {
    this.console_element.style.display = 'block';
    this.console_active = true;
  }

  hideConsole() {
    this.console_element.style.display = 'none';
    this.console_active = false;
  }

  userConsoleClick() {
    this.clicks += 1;

    let generated_coin = this.miner.generateCoin();
    this.wallet.updateBitcoinBalance(generated_coin);
    this.createMessage(`Reward: ${generated_coin} BTC mined`);

    let level_check = this.level.addExperience();
    if (level_check == '__new_level_reached__') {
      let level_up_bonus = this.miner.addBonusLevelUp();
      this.wallet.updateBitcoinBalance(level_up_bonus);
      this.createLogMessage('New Level reached!');
      this.createInfoMessage(`New Level bonus: ${level_up_bonus} BTC`);
    }

    // clear console if more than 100 messages
    let messages_generated = this.message_container.childElementCount;
    if (messages_generated > this.max_messages) {
      this.clearConsole();
    }
  }

  automatedConsoleClick(name = 'Bot 1') {
    this.clicks += 1;
    this.createLogMessage(`Console clicked by '${name}', console clicked ${this.clicks} times`);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;

    // clear console if more than 100 messages
    let messages_generated = this.message_container.childElementCount;
    if (messages_generated > this.max_messages) {
      this.clearConsole();
    }
  }

  createConsoleElement() {
    this.console_element = document.createElement('div');
    this.console_element.classList.add('__console__');

    this.createTopBar();
    this.createMessageContaiener();
    this.createPromtLine();

    document.querySelector('.content_container_column_left').appendChild(this.console_element);
  }

  createTopBar() {
    this.top_bar = document.createElement('div');
    this.top_bar.classList.add('console_top_bar');

    const navigation_buttons_container = document.createElement('div');
    navigation_buttons_container.classList.add('navigation_buttons_container');
    for (let i = 1; i <= 3; i++) {
      let nav_button = document.createElement('div');
      nav_button.classList.add('navigation_button');
      nav_button.classList.add(`navigation_button_${i}`);
      navigation_buttons_container.appendChild(nav_button);
    }

    const server_windows_container = document.createElement('div');
    server_windows_container.classList.add('server_windows_container');
    let temp_1 = document.createElement('div');
    temp_1.classList.add('server_window');
    let temp_2 = document.createElement('div');
    temp_2.classList.add('server_window');
    temp_2.classList.add('server_window_selected');
    server_windows_container.appendChild(temp_1);
    server_windows_container.appendChild(temp_2);

    this.top_bar.appendChild(navigation_buttons_container);
    this.top_bar.appendChild(server_windows_container);
    this.console_element.appendChild(this.top_bar);
  }

  createMessageContaiener() {
    this.message_container = document.createElement('div');
    this.message_container.classList.add('promt_message_container');

    this.message_container.addEventListener('click', () => this.userConsoleClick());

    this.console_element.appendChild(this.message_container);
  }

  createPromtLine() {
    this.promt_placeholder = document.createElement('div');
    this.promt_placeholder.classList.add('promt_placeholder');
    this.promt_placeholder.textContent = 'user@server:~$ ';

    this.promt_content = document.createElement('div');
    this.promt_content.classList.add('promt_content');
    this.promt_content.textContent = 'apt get install dokku';

    this.promt = document.createElement('div');
    this.promt.classList.add('promt_line');

    this.promt.addEventListener('click', () => this.userConsoleClick());

    this.promt.appendChild(this.promt_placeholder);
    this.promt.appendChild(this.promt_content);
    this.console_element.appendChild(this.promt);
  }

  createMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.textContent = message;

    this.message_container.appendChild(message_element);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  createLogMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('log-message');
    message_element.textContent = `[log] ${message}`;

    this.message_container.appendChild(message_element);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  createInfoMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('info-message');
    message_element.textContent = `[info] ${message}`;

    this.message_container.appendChild(message_element);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  createWarningMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('warning-message');
    message_element.textContent = `[warning] ${message}`;

    this.message_container.appendChild(message_element);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  createErrorMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('error-message');
    message_element.textContent = `[critical] ${message}`;

    this.message_container.appendChild(message_element);
    // scroll to bottom
    this.message_container.scrollTop = this.message_container.scrollHeight;
  }

  clearConsole() {
    while (this.message_container.firstChild) {
      this.message_container.firstChild.remove()
    }
  }
}