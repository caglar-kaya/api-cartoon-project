'use strict';

import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { HEADER_CONTAINER_ID } from '../constants.js';

export const createHeaderSection = () => {
  const headerContainer = getDOMElement(HEADER_CONTAINER_ID);

  const headerTitle = createDOMElement('h1');
  headerTitle.textContent = `Welcome to Rick and Morty API App`;
  headerContainer.appendChild(headerTitle);

  const headerParagraph1 = createDOMElement('p');
  headerParagraph1.textContent = `Rick and Morty is an American adult animated
   science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon
    Network's nighttime programming block, Adult Swim.`;
  headerContainer.appendChild(headerParagraph1);

  const headerParagraph2 = createDOMElement('p');
  headerParagraph2.textContent = `In my application, when you start it or refresh the page,
   you can display 20 characters out of 826 characters randomly and also you can search for
   characters according to their names and status.`;
  headerContainer.appendChild(headerParagraph2);
};
