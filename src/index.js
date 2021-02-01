import { studentData } from "./lib";

// get a list of all student last names and ids
// only those that scored below 70
const lowScores = studentData
  .filter((student) => student.score <= 70)
  .map((student) => ({
    lastName: student.name,
    id: student.id,
  }));

console.log(lowScores);
