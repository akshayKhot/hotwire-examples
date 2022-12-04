import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "message" ];

  connect() {
    console.log("Controller connected!");
  }

  reverse() {
    const message = this.messageTarget.textContent;
    const reversedMessage = this.reverseMessage(message);
    this.messageTarget.textContent = reversedMessage;
  }

  append_i() {
    this.messageTarget.textContent += "!"
  }

  block(e) {
    console.log("Do something else");
  }

  reverseMessage(message) {
    return message.split('').reverse().join('');
  }
}
