'use strict';

import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { main } from '../app.js';
import {
  CARD_CONTAINER_ID,
  SEARCH_CONTAINER_ID,
  HEADER_CONTAINER_ID,
  INFO_CONTAINER_ID,
} from '../constants.js';

const initializeApp = () => {
  setupAppHTML();
  main();
};

const setupAppHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');

  const headerContainer = createDOMElement('div', { id: HEADER_CONTAINER_ID });
  const searchContainer = createDOMElement('div', { id: SEARCH_CONTAINER_ID });
  const infoContainer = createDOMElement('div', { id: INFO_CONTAINER_ID });
  const cardContainer = createDOMElement('div', { id: CARD_CONTAINER_ID });

  userInterfaceContainer.appendChild(headerContainer);
  userInterfaceContainer.appendChild(searchContainer);
  userInterfaceContainer.appendChild(infoContainer);
  userInterfaceContainer.appendChild(cardContainer);
};

window.addEventListener('load', initializeApp);
