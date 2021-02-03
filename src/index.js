import { assignLetterGrade, studentData } from "./lib";

const scoresWithLetterGrades = studentData.map((student) => ({
  ...student,
  grade: assignLetterGrade(student.score),
}));

const testAvg =
  studentData.reduce((total, student) => {
    console.log(student, "here is the current student");
    console.log("here is the current score", student.score);
    console.log("here is the total ", total);
    return total + student.score;
  }, 0) / studentData.length;

console.log(testAvg);
