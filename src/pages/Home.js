import characterData from "../utils/getCharacterData";

const Home = async () => {
  const characters = await characterData();

  const view = `
        <div class="characters">
            ${characters.results
              .map(
                (character) => `
            <article class="character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="Picture of ${character.name} from Rick & Morty">
                    <h2>${character.name}</h2>
                </a>
            </article>
            `
              )
              .join("")}
        </div>
    `;

  return view;
};

export default Home;
