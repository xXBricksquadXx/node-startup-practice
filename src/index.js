// have to destructure the named export from lib
import { getLastName, studentData } from "./lib";

// get a list of all student last names and ids
// only those that scored below 70
const lowScores = studentData
  .filter(({ score }) => score <= 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
