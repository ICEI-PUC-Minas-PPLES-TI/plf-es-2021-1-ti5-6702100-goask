import * as styles from "./styles";

//From global
import themes from "src/share/styles/themes";

interface Content {
  text: string;
}

const TitleRainbow: React.FC<Content> = ({ text }) => {
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const createColorsArray = () => {
    const arr: Array<string> = [];
    for (let i in themes.colors.borders) {
      arr.push(themes.colors.borders[i]);
    }
    return shuffleArray(arr);
  };

  const colors: string[] = createColorsArray();

  if (colors)
    return (
      <styles.Container>
        {Array.from(text).map((c, index) => (
          <styles.RainbowBlock color={colors[index % colors.length]}>
            {c}
          </styles.RainbowBlock>
        ))}
      </styles.Container>
    );
};

export default TitleRainbow;
