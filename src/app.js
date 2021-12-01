'use strict';

import { fetchData } from "./helpers/fetchData.js";

export async function main() {
  try {
    const data = await fetchData('https://rickandmortyapi.com/api/character');
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}