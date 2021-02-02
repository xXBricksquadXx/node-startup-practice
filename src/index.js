// Have to destructure the named export from lib
import { rickMorty } from "./lib";

const characterList = rickMorty
  .filter(({ origin }) => origin.name === "Earth (C-137)")
  .map(({ name }) => ({ name }));

console.log(characterList);
