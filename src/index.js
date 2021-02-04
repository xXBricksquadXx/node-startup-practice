import { moviesData } from "./lib";

const actorTally = moviesData
  // Remove entries that have nothing details or that have an empty string for the 'cast'
  .filter(({ details }) => details[0]?.cast)
  .reduce((tally, { details }) => {
    // Avoid mutation by spreading into a new object reference
    const ret = { ...tally };
    const { cast } = details[0];
    cast.split(", ").forEach((name) => {
      ret[name] = tally[name] ? tally[name] + 1 : 1;
    });
    return ret;
  }, {});

console.log(actorTally);
