export default class UIController {
  classNameActive: string;

  constructor() {
    this.classNameActive = "is-active";
  }

  // MEMO: DOMを表示する関数
  activateDOM(dom: HTMLElement) {
    dom.classList.add(this.classNameActive);
  }

  // MEMO: DOMを非表示する関数
  deactivateDOM(dom: HTMLElement) {
    dom.classList.remove(this.classNameActive);
  }
}
