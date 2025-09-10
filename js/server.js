export default class Server {
  constructor() {
    this.ip = this.generateIP();ö
  }

  generateIP() {
    return Array(4)
      .fill(0)
      .map(() => Math.floor(Math.random() * 256))
      .join('.');
  }
}