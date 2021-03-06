'use strict';

import {
  SEARCH_CONTAINER_ID,
  SEARCH_RESULT_CONTAINER_ID,
  URL_CHARACTERS,
} from '../constants.js';
import { getDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { fetchData } from '../helpers/fetchData.js';

export const createSearchResultAsCard = async (characterName, status) => {
  const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);

  const searchResultContainer = createDOMElement('div', {
    id: SEARCH_RESULT_CONTAINER_ID,
  });
  searchContainer.appendChild(searchResultContainer);

  const resultTextContainer = createDOMElement('div');
  resultTextContainer.classList.add('result-text-container');
  searchResultContainer.appendChild(resultTextContainer);

  const resultCardContainer = createDOMElement('div');
  resultCardContainer.classList.add('result-card-container');
  searchResultContainer.appendChild(resultCardContainer);

  let searchResultData;
  try {
    searchResultData = await fetchData(
      `${URL_CHARACTERS}/?name=${characterName}&status=${status}`,
    );
  } catch (error) {
    // Ignore error
  }

  const searchResultText = createDOMElement('h3');
  if (!searchResultData) {
    searchResultText.textContent = `There were no characters found.`;
  } else if (searchResultData.info.count === 1) {
    searchResultText.textContent = `You have only 1 character for your search.`;
  } else {
    searchResultText.textContent = `You have ${searchResultData.info.count} characters for your search.`;
  }
  resultTextContainer.appendChild(searchResultText);

  if (searchResultData && searchResultData.info.count >= 1) {
    for (let i = 1; i <= searchResultData.info.pages; i++) {
      const pageData = await fetchData(
        `${URL_CHARACTERS}/?page=${i}&name=${characterName}&status=${status}`,
      );

      for (const result of pageData.results) {
        const cardElement = createDOMElement('div');
        cardElement.classList.add('card-element');
        resultCardContainer.appendChild(cardElement);

        const cardTitle = createDOMElement('div');
        cardTitle.classList.add('card-title');
        cardElement.appendChild(cardTitle);

        const cardTitleName = createDOMElement('h2');
        cardTitleName.textContent = result.name;
        cardTitle.appendChild(cardTitleName);

        const cardImage = createDOMElement('div');
        cardImage.classList.add('card-image');
        cardElement.appendChild(cardImage);

        const image = createDOMElement('img');
        image.src = result.image;
        image.alt = result.name;
        cardImage.appendChild(image);

        const cardInfos = createDOMElement('div');
        cardInfos.classList.add('card-infos');
        cardElement.appendChild(cardInfos);

        const cardInfosList = createDOMElement('ul');
        cardInfos.appendChild(cardInfosList);

        const cardInfosListItem1 = createDOMElement('li');
        cardInfosListItem1.textContent = `Gender: ${result.gender}`;
        cardInfosList.appendChild(cardInfosListItem1);

        const cardInfosListItem2 = createDOMElement('li');
        cardInfosListItem2.textContent = `Species: ${result.species}`;
        cardInfosList.appendChild(cardInfosListItem2);

        const cardInfosListItem3 = createDOMElement('li');
        cardInfosListItem3.textContent = `Status: ${result.status}`;
        cardInfosList.appendChild(cardInfosListItem3);
      }
    }
  }
};
