import { getBirthYear, senatorsData } from "./lib";

// TODO we need to make a list of all female senators to call them and invite to a special event (we need phone and name)

// TODO Get a list of jut the name field from the senators if they were born since 1960
const femaleSenatorNames = senatorsData
  .filter(({ person }) => person.gender === "female")
  .map(({ person }) => ({ name: person.name }));

// console.log(femaleSenatorNames);

const youngSenators = senatorsData
  .filter(({ person }) => getBirthYear(person.birthday) > 1960)
  .map(({ person }) => ({ name: person.name }));

console.log(youngSenators);
