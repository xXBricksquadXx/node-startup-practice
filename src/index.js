import { assignLetterGrade, studentData } from "./lib";

const studentDataWithGrades = studentData.map((student) => ({
  ...student,
  grade: assignLetterGrade(student.score),
}));

const gradeTally = studentDataWithGrades.reduce((tally, { grade }) => {
  const ret = { ...tally };
  ret[grade] = tally[grade] ? tally[grade] + 1 : 1;
  return ret;
}, {});

console.log(gradeTally);
