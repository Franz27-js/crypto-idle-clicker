export default class Console {
  constructor(console_element_id) {
    this.clicks = 0;
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
}