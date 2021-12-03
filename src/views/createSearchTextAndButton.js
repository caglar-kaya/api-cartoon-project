'use strict';

import { SEARCH_CONTAINER_ID, SEARCH_TEXT_BUTTON_CONTAINER_ID, BUTTON_SEARCH_ID } from "../constants.js";
import { getDOMElement, createDOMElement } from "../utils/DOMUtils.js";

export const createSearchTextAndButton = () => {
  const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);

  const searchTextButtonContainer = createDOMElement('div', { id: SEARCH_TEXT_BUTTON_CONTAINER_ID });
  searchContainer.appendChild(searchTextButtonContainer);

  const searchText = createDOMElement('input');
  searchText.placeholder = 'enter character name to search';
  searchTextButtonContainer.appendChild(searchText);

  const buttonSearch = createDOMElement('button', { id: BUTTON_SEARCH_ID });
  buttonSearch.type = 'submit';
  buttonSearch.textContent = 'SEARCH FOR CHARACTER';
  searchTextButtonContainer.appendChild(buttonSearch);
}