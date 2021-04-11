import getHash from "../utils/getHash";
import characterData from "../utils/getCharacterData";

const Character = async () => {
  const id = getHash();
  const character = await characterData(id);
  const { episode, status, species, gender, name, location, image } = character;
  const view = `
        <div class="character-inner">
            <article class="character-card">
                <img src="${image}" alt="Picture of ${name} from Rick & Morty">
                <h2>${name}</h2>
            </article>
            <article class="character-card">
                <h3>Episodes: <span>${episode.length}</span></h3>
                <h3>Status: <span>${status}</span></h3>
                <h3>Species: <span>${species}</span></h3>
                <h3>Gender: <span>${gender}</span></h3>
                <h3>Origin: <span>${origin.name}</span></h3>
                <h3>Last Location:<span>${location.name}</span></h3>
            </article>
        </div>
    `;

  return view;
};

export default Character;
