'use strict';

import { SEARCH_CONTAINER_ID, SEARCH_MENU_CONTAINER_ID } from "../constants.js";
import { getDOMElement, createDOMElement } from "../utils/DOMUtils.js";

export const createSearchMenu = () => {
  const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);

  const searchMenuContainer = createDOMElement('div', { id: SEARCH_MENU_CONTAINER_ID });
  searchContainer.appendChild(searchMenuContainer);

  const searchText = createDOMElement('input');
  searchText.placeholder = 'enter character name to search';
  searchMenuContainer.appendChild(searchText);

  const searchSelect = createDOMElement('select');
  searchMenuContainer.appendChild(searchSelect);

  const searchSelectOption1 = createDOMElement('option');
  searchSelectOption1.textContent = 'alive';
  searchSelect.appendChild(searchSelectOption1);

  const searchSelectOption2 = createDOMElement('option');
  searchSelectOption2.textContent = 'dead';
  searchSelect.appendChild(searchSelectOption2);

  const searchSelectOption3 = createDOMElement('option');
  searchSelectOption3.textContent = 'unknown';
  searchSelect.appendChild(searchSelectOption3);

  const buttonSearch = createDOMElement('button');
  buttonSearch.type = 'submit';
  buttonSearch.textContent = 'SEARCH FOR CHARACTER';
  searchMenuContainer.appendChild(buttonSearch);
}