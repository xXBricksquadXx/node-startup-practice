// Re-exporting out whatever 'data' exports out as default.
// Assigning it the name 'studentData'
export { default as studentData } from "./student-data";

export const assignLetterGrade = (score) => {
  if (score > 90) {
    return "A";
  }
  if (score > 80) {
    return "B";
  }
  if (score > 70) {
    return "C";
  }
  if (score > 60) {
    return "D";
  }
  return "F";
};

export const curveScore = (score, curve) => score + curve;

export const getLastName = (name) => name.split(" ")[1];
