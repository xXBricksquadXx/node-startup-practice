import { studentData } from "./lib";

const createFigureHTML = (student, string, registration) => `
<section>
<h2>${student}</h2>
<ul>
<li class="student-score">${string}</li>
<li class="student-id">${registration}</li>
</ul>
</section>
`;
const aListGroup = studentData
  // A 'filter' uses a PREDICATE callback Function
  .filter(({ score }) => score >= 70)
  .map(({ name, score, id }) => createFigureHTML(name, score, id))
  .join("\n");

console.log(aListGroup);
