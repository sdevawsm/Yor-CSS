// Yor CSS - Utility Functions
export function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }
  return selector;
}

export function getElements(selector) {
  if (typeof selector === 'string') {
    return document.querySelectorAll(selector);
  }
  return selector;
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export function hasClass(element, className) {
  return element.classList.contains(className);
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
