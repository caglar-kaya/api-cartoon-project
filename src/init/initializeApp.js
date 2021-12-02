'use strict';

import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { main } from "../app.js";
import { BUTTON_RANDOM_CONTAINER_ID } from "../constants.js";

const initializeApp = () => {
  setupAppHTML();
  main();
};

const setupAppHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const buttonRandomContainer = createDOMElement('div', { id: BUTTON_RANDOM_CONTAINER_ID });

  userInterfaceContainer.appendChild(buttonRandomContainer);
};

window.addEventListener('load', initializeApp);