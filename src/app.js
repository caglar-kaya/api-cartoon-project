'use strict';

import { fetchData } from "./helpers/fetchData.js";
import { createCardElement } from "../src/views/createCardElement.js";
import { URL_CHARACTERS } from "./constants.js";
import { createSearchTextAndButton } from "../src/views/createSearchTextAndButton.js";
import { createSearchResult } from "../src/views/createSearchResult.js";

export async function main() {
  try {
    const data = await fetchData(URL_CHARACTERS);
    console.log(data);

    createCardElement();

    createSearchTextAndButton();

  } catch (error) {
    console.log(error);
  }
}