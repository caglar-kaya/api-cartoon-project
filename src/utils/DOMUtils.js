'use strict';

export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

export const createDOMElement = (tag, options) => {
  const { id } = options || {};

  const element = document.createElement(tag);

  if (id != null) {
    element.id = id;
  }

  return element;
};

export const getDOMElement = (id) => {
  return document.getElementById(id);
};