import { assignLetterGrade, studentData } from "./lib";

const studentDataWithGrades = studentData.map((student) => ({
  ...student,
  letterGrade: assignLetterGrade(student.score),
}));

console.log(studentDataWithGrades);
