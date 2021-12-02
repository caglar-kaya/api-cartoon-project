'use strict';

import { createDOMElement, getDOMElement } from "../utils/DOMUtils.js";
import { CARD_CONTAINER_ID, CARD_ID, CARD_TITLE_ID, CARD_IMAGE_ID, CARD_INFOS_ID } from "../constants.js";
import { fetchData } from "../helpers/fetchData.js";
import { URL_CHARACTERS } from "../constants.js";
import { generateRandomNumber } from "../helpers/generateRandomNumber.js";

export const createCardElement = async () => {
  const data = await fetchData(URL_CHARACTERS);

  let cardNumber = 1;
  let cardTitleNumber = 1;
  let cardImageNumber = 1;
  let cardInfosNumber = 1;

  for (let i = 0; i < 9; i++) {

    const randomNumber = generateRandomNumber();
    const cardContainer = getDOMElement(CARD_CONTAINER_ID);

    const cardElement = createDOMElement('div', { id: `${CARD_ID}-${cardNumber}` });
    cardNumber++;
    cardElement.classList.add('card-element');
    cardContainer.appendChild(cardElement);

    const cardTitle = createDOMElement('div', { id: `${CARD_TITLE_ID}-${cardTitleNumber}` });
    cardTitleNumber++;
    cardElement.appendChild(cardTitle);

    const cardTitleName = createDOMElement('h2');
    cardTitleName.textContent = data.results[randomNumber].name;
    cardTitle.appendChild(cardTitleName);

    const cardImage = createDOMElement('div', { id: `${CARD_IMAGE_ID}-${cardImageNumber}` });
    cardImageNumber++;
    cardElement.appendChild(cardImage);

    const image = createDOMElement('img');
    image.src = data.results[randomNumber].image;
    image.alt = data.results[randomNumber].name;
    cardImage.appendChild(image);

    const cardInfos = createDOMElement('div', { id: `${CARD_INFOS_ID}-${cardInfosNumber}` });
    cardInfosNumber++;
    cardElement.appendChild(cardInfos);

    const cardInfosList = createDOMElement('ul');
    cardInfos.appendChild(cardInfosList);

    const cardInfosListItem1 = createDOMElement('li');
    cardInfosListItem1.textContent = `Gender: ${data.results[randomNumber].gender}`;
    cardInfosList.appendChild(cardInfosListItem1);

    const cardInfosListItem2 = createDOMElement('li');
    cardInfosListItem2.textContent = `Species: ${data.results[randomNumber].species}`;
    cardInfosList.appendChild(cardInfosListItem2);

    const cardInfosListItem3 = createDOMElement('li');
    cardInfosListItem3.textContent = `Status: ${data.results[randomNumber].status}`;
    cardInfosList.appendChild(cardInfosListItem3);

  }

}