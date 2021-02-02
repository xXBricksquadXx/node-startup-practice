// Have to destructure the named export from lib
import { senatorsData } from "./lib";

// TODO create new array {fullNickname: 'michael' 'mike' crapo' link' twitterid} - "Democrats"

const demSenators = senatorsData
  .filter(({ party }) => party === "Democrat")
  .map(
    ({
      person: {
        firstname: firstName,
        nickname: nickName,
        lastname: lastName,
        link,
        twitterid: twitter,
      },
    }) => ({
      fullNickName: `${firstName} ${nickName} ${lastName}`,
      link,
      twitter,
    })
  );

console.log(demSenators);
