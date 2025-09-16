// Yor CSS - Alert Component
import { getElement, getElements, addClass, removeClass } from '../utils/index.js';

class Alert {
  constructor(element, options = {}) {
    this.element = getElement(element);
    this.options = {
      dismissible: true,
      autoClose: false,
      delay: 5000,
      ...options
    };
    
    this.init();
  }

  init() {
    if (!this.element) return;
    
    this.element.setAttribute('role', 'alert');
    
    if (this.options.dismissible) {
      this.addDismissButton();
    }
    
    if (this.options.autoClose) {
      this.startAutoClose();
    }
  }

  addDismissButton() {
    const dismissButton = document.createElement('button');
    dismissButton.type = 'button';
    dismissButton.className = 'yor-alert-dismiss';
    dismissButton.innerHTML = '×';
    dismissButton.setAttribute('aria-label', 'Close');
    
    dismissButton.addEventListener('click', () => {
      this.close();
    });
    
    this.element.appendChild(dismissButton);
  }

  startAutoClose() {
    setTimeout(() => {
      this.close();
    }, this.options.delay);
  }

  close() {
    removeClass(this.element, 'show');
    setTimeout(() => {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }, 300);
  }

  static autoInit() {
    const alerts = getElements('[data-yor-alert]');
    alerts.forEach(alert => {
      new Alert(alert);
    });
  }
}

export default Alert;
