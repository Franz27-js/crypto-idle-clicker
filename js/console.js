export default class Console {
  constructor(console_element_id) {
    this.clicks = 0;

    this.createConsoleElement();
  }

  createConsoleElement() {
    const console_element = document.createElement('div');
    console_element.classList.add('__console__');

    const top_bar = this.createTopBar();
    console_element.appendChild(top_bar);

    document.querySelector('.content_container_column_left').appendChild(console_element);
  }

  createLogMessage(message) {
    this.clicks += 1;

    const message_element = document.createElement('div');
    message_element.classList.add('message');
    message_element.classList.add('log-message');
    message_element.textContent = `[log] ${message}`;
  }

  getClicks() {
    return this.clicks;
  }

  createTopBar() {
    const top_bar = document.createElement('div');
    top_bar.classList.add('console_top_bar');

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

    top_bar.appendChild(navigation_buttons_container);
    top_bar.appendChild(server_windows_container);
    return top_bar;
  }
}