import { getLastName, studentData } from "./lib";

const lowScores = studentData
  .filter(({ score }) => score < 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
