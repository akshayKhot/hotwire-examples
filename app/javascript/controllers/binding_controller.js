import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="binding"
export default class extends Controller {
  static values = { colors: Array }
  static targets = [ "textOne", "textTwo" ]

  toggleRed() {
    const textColor = "text-red-600";
    this.textOneTarget.classList.toggle(textColor);
  }

  toggleColor() {
    this.colorsValue.forEach(color => {
      const textColor = `text-${color}-600`;
      this.textTwoTarget.classList.toggle(textColor);
    });
  }
}
