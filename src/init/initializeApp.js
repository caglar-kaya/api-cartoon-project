'use strict';

import { getDOMElement } from '../utils/DOMUtils.js';
import { main } from "../app.js";

const initializeApp = () => {
  setupAppHTML();
  main();
};

const setupAppHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
};

window.addEventListener('load', initializeApp);