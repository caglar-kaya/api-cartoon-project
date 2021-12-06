'use strict';

import { getDOMElement } from '../utils/DOMUtils.js';
import { createSearchResultAsCard } from '../views/createSearchResultAsCard.js';
import {
  SEARCH_RESULT_CONTAINER_ID,
  SEARCH_CONTAINER_ID,
  CARD_CONTAINER_ID,
  INFO_CONTAINER_ID,
} from '../constants.js';

export const clickSearchButton = () => {
  const inputText = document.querySelector('input');
  const selectStatus = document.querySelector('select');
  const searchButton = document.querySelector('button');

  const userInterfaceContainer = getDOMElement('user-interface');

  searchButton.addEventListener('click', () => {
    const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);
    const searchResultContainer = getDOMElement(SEARCH_RESULT_CONTAINER_ID);

    if (searchResultContainer) {
      searchContainer.removeChild(searchResultContainer);
    }

    const cardContainer = getDOMElement(CARD_CONTAINER_ID);
    if (cardContainer) {
      userInterfaceContainer.removeChild(cardContainer);
    }

    const infoContainer = getDOMElement(INFO_CONTAINER_ID);
    if (infoContainer) {
      userInterfaceContainer.removeChild(infoContainer);
    }

    createSearchResultAsCard(inputText.value, selectStatus.value);
  });
};
