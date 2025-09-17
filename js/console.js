export default class Console {
  constructor(console_element_id) {
    this.console_element = null;
    this.top_bar = null;
    this.message_container = null;
    this.promt_placeholder = null;
    this.promt_content = null;
    
    this.clicks = 0;

    this.createConsoleElement();

    this.createLogMessage('Console initialized');
    this.createLogMessage(`Console element ID: ${console_element_id}`);
    this.createLogMessage('Ready for commands');
    this.createInfoMessage('This is an info message');
    this.createWarningMessage('This is a warning message');
    this.createErrorMessage('This is an error message');
    this.createMessage('This is a regular message');
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

  updatePromtContent(added_content) {
    this.promt_content.textContent += added_content;
  }

  showConsole() {
    this.console_element.style.display = 'block';
  }

  hideConsole() {
    this.console_element.style.display = 'none';
  }

  userConsoleClick() {
    this.clicks += 1;
    console.log(`Console clicked ${this.clicks} times`);
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
  }

  createLogMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('log-message');
    message_element.textContent = `[log] ${message}`;

    this.message_container.appendChild(message_element);
  }

  createInfoMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('info-message');
    message_element.textContent = `[info] ${message}`;

    this.message_container.appendChild(message_element);
  }

  createWarningMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('warning-message');
    message_element.textContent = `[warning] ${message}`;

    this.message_container.appendChild(message_element);
  }

  createErrorMessage(message) {
    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('error-message');
    message_element.textContent = `[critical] ${message}`;

    this.message_container.appendChild(message_element);
  }
}