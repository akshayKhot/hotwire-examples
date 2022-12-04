import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example"
export default class extends Controller {
  static targets = [ "button" ]

  select(e) {
    if(!this.exampleSelected(e)) {
      this.selectExample(e);
    }
  }

  selectExample(e) {
    this.buttonTargets.forEach(btn => btn.classList.remove('selected-example'));
    e.target.classList.add("selected-example");
  }

  exampleSelected(e) {
    return e.target.classList.contains("selected-example");
  }
}
