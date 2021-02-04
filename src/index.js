import { assignLetterGrade, studentData } from "./lib";

const studentDataWithGrades = studentData.map((student) => ({
  ...student,
  letterGrade: assignLetterGrade(student.score),
}));

const testAvg =
  studentDataWithGrades.reduce((total, student) => {
    console.log(student, "student");
    return total + student.score;
  }, 0) / studentDataWithGrades.length;
