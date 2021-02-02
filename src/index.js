import { getLastName, studentData } from "./lib";

const lowScores = studentData
  .filter(({ score }) => score < 70)
  .map(({ name, id }) => ({
    lastName: getLastName(name),
    id,
  }));

console.log(lowScores);
