import { studentData } from "./lib";

function getLastName(name) {
  return name.split(" ")[1];
}

// get a list of all student last names and ids
// only those that scored below 70
const lowScores = studentData
  .filter((student) => student.score <= 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
