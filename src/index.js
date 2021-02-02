import { assignLetterGrade, curveScore, getLastName, studentData } from "./lib";

// TODO: Get a list of just the 'name' field from the senators if they were born since 1960

const lowScores = studentData
  .filter(({ score }) => score < 70)
  .map(({ name, id }) => ({
    lastName: getLastName(name),
    id,
  }));

const scoresWithLetterGrades = studentData.map((student) => ({
  grade: assignLetterGrade(student.score),
  ...student,
}));

const curvedScores = studentData.map((student) => ({
  curvedScore: curveScore(student.score, 10),
  ...student,
}));

console.log(curvedScores);
