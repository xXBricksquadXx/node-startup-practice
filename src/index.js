import { studentData } from "./lib";

console.log(studentData);

const lowScores = studentData.filter((student) => student.score < 70);

console.log(lowScores);
