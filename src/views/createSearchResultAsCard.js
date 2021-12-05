'use strict';

import { SEARCH_CONTAINER_ID, SEARCH_RESULT_CONTAINER_ID, URL_CHARACTERS } from "../constants.js";
import { getDOMElement, createDOMElement } from "../utils/DOMUtils.js";
import { fetchData } from "../helpers/fetchData.js";


export const createSearchResultAsCard = async (characterName, status) => {

  const searchContainer = getDOMElement(SEARCH_CONTAINER_ID);

  const searchResultContainer = createDOMElement('div', { id: SEARCH_RESULT_CONTAINER_ID });
  searchContainer.appendChild(searchResultContainer);

  const resultCardContainer = createDOMElement('div');
  resultCardContainer.classList.add('result-card-container');
  searchResultContainer.appendChild(resultCardContainer);

  const searchResultData = await fetchData(`${URL_CHARACTERS}/?name=${characterName}&status=${status}`);

  if (searchResultData.info.count >= 1) {

    for (let i = 1; i <= searchResultData.info.pages; i++) {

      const pageData = await fetchData(`${URL_CHARACTERS}/?page=${i}&name=${characterName}&status=${status}`);

      for (let j = 0; j < pageData.results.length; j++) {

        const cardElement = createDOMElement('div');
        cardElement.classList.add('card-element');
        resultCardContainer.appendChild(cardElement);

        const cardTitle = createDOMElement('div');
        cardElement.appendChild(cardTitle);

        const cardTitleName = createDOMElement('h2');
        cardTitleName.textContent = pageData.results[j].name;
        cardTitle.appendChild(cardTitleName);

        const cardImage = createDOMElement('div');
        cardElement.appendChild(cardImage);

        const image = createDOMElement('img');
        image.src = pageData.results[j].image;
        image.alt = pageData.results[j].name;
        cardImage.appendChild(image);

        const cardInfos = createDOMElement('div');
        cardElement.appendChild(cardInfos);

        const cardInfosList = createDOMElement('ul');
        cardInfos.appendChild(cardInfosList);

        const cardInfosListItem1 = createDOMElement('li');
        cardInfosListItem1.textContent = `Gender: ${pageData.results[j].gender}`;
        cardInfosList.appendChild(cardInfosListItem1);

        const cardInfosListItem2 = createDOMElement('li');
        cardInfosListItem2.textContent = `Species: ${pageData.results[j].species}`;
        cardInfosList.appendChild(cardInfosListItem2);

        const cardInfosListItem3 = createDOMElement('li');
        cardInfosListItem3.textContent = `Status: ${pageData.results[j].status}`;
        cardInfosList.appendChild(cardInfosListItem3);

      }
    }
  }
}