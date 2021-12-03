'use strict';

import { createDOMElement, getDOMElement } from "../utils/DOMUtils.js";
import { CARD_CONTAINER_ID } from "../constants.js";
import { fetchData } from "../helpers/fetchData.js";
import { URL_CHARACTERS } from "../constants.js";
import { generateRandomNumber } from "../helpers/generateRandomNumber.js";

export const createCardElement = async () => {

  const mainData = await fetchData(URL_CHARACTERS);
  const randomNumber = generateRandomNumber(mainData.info.pages) + 1; // [1, 42] number of pages
  const randomPageData = await fetchData(`${URL_CHARACTERS}?page=${randomNumber}`);

  const cardContainer = getDOMElement(CARD_CONTAINER_ID);

  for (let i = 0; i < randomPageData.results.length; i++) {

    const cardElement = createDOMElement('div');
    cardElement.classList.add('card-element');
    cardContainer.appendChild(cardElement);

    const cardTitle = createDOMElement('div');
    cardElement.appendChild(cardTitle);

    const cardTitleName = createDOMElement('h2');
    cardTitleName.textContent = randomPageData.results[i].name;
    cardTitle.appendChild(cardTitleName);

    const cardImage = createDOMElement('div');
    cardElement.appendChild(cardImage);

    const image = createDOMElement('img');
    image.src = randomPageData.results[i].image;
    image.alt = randomPageData.results[i].name;
    cardImage.appendChild(image);

    const cardInfos = createDOMElement('div');
    cardElement.appendChild(cardInfos);

    const cardInfosList = createDOMElement('ul');
    cardInfos.appendChild(cardInfosList);

    const cardInfosListItem1 = createDOMElement('li');
    cardInfosListItem1.textContent = `Gender: ${randomPageData.results[i].gender}`;
    cardInfosList.appendChild(cardInfosListItem1);

    const cardInfosListItem2 = createDOMElement('li');
    cardInfosListItem2.textContent = `Species: ${randomPageData.results[i].species}`;
    cardInfosList.appendChild(cardInfosListItem2);

    const cardInfosListItem3 = createDOMElement('li');
    cardInfosListItem3.textContent = `Status: ${randomPageData.results[i].status}`;
    cardInfosList.appendChild(cardInfosListItem3);

  }

}