'use strict';

import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { INFO_CONTAINER_ID } from '../constants.js';

export const createInfoElement = () => {
  const infoContainer = getDOMElement(INFO_CONTAINER_ID);

  const cardContainerTitle = createDOMElement('h3');
  cardContainerTitle.textContent = `You are displaying 20 characters out of 826 characters randomly.`;
  infoContainer.appendChild(cardContainerTitle);
};
