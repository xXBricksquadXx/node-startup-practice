import { rickMorty } from "./lib";

const createFigureHTML = (figcaption, src) => `
<figure>
<img src = "${src} " alt="" />
<figcaption>${figcaption}</figcaption>
</figure>
`;
const episodeURLEndings = rickMorty
  // A 'filter' uses a PREDICATE callback Function
  .filter(({ gender }) => gender === "Female")
  .map(({ name, image }) => createFigureHTML(name, image))
  .join("\n");

console.log(episodeURLEndings);
