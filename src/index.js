import { assignLetterGrade, getLastName, studentData } from "./lib";

const lowScores = studentData
  .filter(({ score }) => score < 70)
  .map(({ name, id }) => ({
    lastName: getLastName(name),
    id,
  }));

const scoresWithLetterGrades = studentData.map((student) => {
  const ret = { grade: assignLetterGrade(student.score), ...student };

  return ret;
});

console.log(scoresWithLetterGrades);
