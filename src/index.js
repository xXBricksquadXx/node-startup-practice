// have to destructure the named export from lib
import {
  assignLetterGrade,
  curvedScore,
  getLastName,
  studentData,
} from "./lib";

// get a list of all student last names and ids
// only those that scored below 70
const lowScores = studentData
  .filter(({ score }) => score <= 70)
  .map(({ name, id }) => ({
    lastName: getLastName(name),
    id,
  }));

// TODO: map over our student and add a letter grade to the data
const scoresWithLetterGrades = studentData.map((student) => {
  const ret = { letterGrade: assignLetterGrade(student.score), ...student };

  return ret;
});
console.log(scoresWithLetterGrades);

const curvedScores = studentData.map((student) => ({
  curvedScore: curvedScore(student.score, 10),
  ...student,
}));

console.log(curvedScores);
