import { studentData } from "./lib";

// Get a list of all students last names and ids - only those that scored below 70
// filter map chain

const lowScores = studentData
  .filter((student) => student.score < 70)
  .map((student) => ({
    lastName: student.name,
    id: student.id,
  }));

console.log(lowScores);
