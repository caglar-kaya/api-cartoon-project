'use strict';

import { fetchData } from "./helpers/fetchData.js";
import { createCardElement } from "../src/views/createCardElement.js";
import { URL_CHARACTERS } from "./constants.js";
import { createSearchMenu } from "./views/createSearchMenu.js";
import { clickSearchButton } from "../src/handlers/clickSearchButton.js";

export const main = async () => {
  try {
    const data = await fetchData(URL_CHARACTERS);
    console.log('https://rickandmortyapi.com/api/character');
    console.log(data);

    const data2 = await fetchData(`${URL_CHARACTERS}/?name=rick&status=alive`);
    console.log('https://rickandmortyapi.com/api/character/?name=rick&status=alive');
    console.log(data2);

    const data3 = await fetchData(`${URL_CHARACTERS}/?page=2&name=rick&status=alive`);
    console.log('https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive');
    console.log(data3);

    createCardElement();

    createSearchMenu();

    clickSearchButton();

  } catch (error) {
    console.log(error);
  }
}