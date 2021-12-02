'use strict';

import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { BUTTON_RANDOM_ID, BUTTON_RANDOM_CONTAINER_ID } from "../constants.js";

export const createRandomButton = () => {
  const buttonRandom = createDOMElement('button', { id: BUTTON_RANDOM_ID });
  buttonRandom.textContent = 'GET 10 CHARACTERS RANDOMLY';
  const buttonRandomContainer = getDOMElement(BUTTON_RANDOM_CONTAINER_ID);
  buttonRandomContainer.appendChild(buttonRandom);
}