'use strict';

import { SEARCH_CONTAINER_ID, SEARCH_RESULT_CONTAINER_ID } from "../constants.js";
import { getDOMElement, createDOMElement } from "../utils/DOMUtils.js";

export const createSearchResult = () => {
  const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);

  const searchResultContainer = createDOMElement('div', { id: SEARCH_RESULT_CONTAINER_ID });
  searchResultContainer.textContent = 'Hello';
  searchContainer.appendChild(searchResultContainer);

}