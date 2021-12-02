'use strict';

import { fetchData } from "./helpers/fetchData.js";
import { createRandomButton } from "../src/views/createRandomButton.js";

export async function main() {
  try {
    const data = await fetchData('https://rickandmortyapi.com/api/character');
    console.log(data);

    createRandomButton();

  } catch (error) {
    console.log(error);
  }
}