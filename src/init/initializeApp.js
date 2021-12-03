'use strict';

import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { main } from "../app.js";
import { BUTTON_RANDOM_CONTAINER_ID, CARD_CONTAINER_ID, SEARCH_CONTAINER_ID } from "../constants.js";

const initializeApp = () => {
  setupAppHTML();
  main();
};

const setupAppHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  userInterfaceContainer.classList.add('scrollable');

  const buttonRandomContainer = createDOMElement('div', { id: BUTTON_RANDOM_CONTAINER_ID });
  const cardContainer = createDOMElement('div', { id: CARD_CONTAINER_ID });
  const searchContainer = createDOMElement('div', { id: SEARCH_CONTAINER_ID });

  userInterfaceContainer.appendChild(buttonRandomContainer);
  userInterfaceContainer.appendChild(cardContainer);
  userInterfaceContainer.appendChild(searchContainer);
};

window.addEventListener('load', initializeApp);