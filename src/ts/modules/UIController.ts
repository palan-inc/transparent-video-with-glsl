export default class UIController {
  classNameLoad: string;
  classNameActive: string;

  constructor() {
    this.classNameLoad = "is-load";
    this.classNameActive = "is-active";
  }

  loadDOM(dom: HTMLElement) {
    dom.classList.add(this.classNameLoad);
  }

  activateDOM(dom: HTMLElement) {
    dom.classList.add(this.classNameActive);
  }

  deactivateDOM(dom: HTMLElement) {
    dom.classList.remove(this.classNameActive);
  }
}
