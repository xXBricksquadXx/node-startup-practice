import { assignLetterGrade, studentData } from "./lib";

const studentDataWithGrades = studentData.map((student) => ({
  ...student,
  grade: assignLetterGrade(student.score),
}));

const aStudents = studentDataWithGrades.filter(({ grade }) => grade === "A");

const aStudentsAvg = (
  aStudents.reduce((total, { score }) => total + score, 0) / aStudents.length
).toFixed(2);

console.log(aStudentsAvg);
