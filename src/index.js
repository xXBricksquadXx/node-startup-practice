import { rickMorty, sliceStringToEnd } from "./lib";

const episodeURLEndings = rickMorty
  .filter(({ gender }) => gender === "Male")
  .map(({ name, episode: episodes }) => {
    const slicedEpisodes = episodes.map((episode) =>
      sliceStringToEnd(episode, "episode")
    );

    return {
      name,
      episodes: slicedEpisodes,
    };
  });

console.log(episodeURLEndings);
