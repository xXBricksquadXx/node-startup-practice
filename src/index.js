import { studentData } from "./lib";

function getLastName(name) {
  /**
   * Assume that there is a space and it's 'first last'
   * 1. TODO: Turn this into an array ['first', 'last']
   * 2. Return [1] (index 1)
   */

  return name.split(" ")[1];
}

const lowScores = studentData
  .filter((student) => student.score < 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
