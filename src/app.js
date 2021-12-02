'use strict';

import { fetchData } from "./helpers/fetchData.js";
import { createRandomButton } from "../src/views/createRandomButton.js";
import { createCardElement } from "../src/views/createCardElement.js";
import { URL_CHARACTERS } from "./constants.js";

export async function main() {
  try {
    const data = await fetchData(URL_CHARACTERS);
    console.log(data);

    createRandomButton();

    createCardElement();

  } catch (error) {
    console.log(error);
  }
}