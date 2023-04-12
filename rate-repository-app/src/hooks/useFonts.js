import { useEffect, useState } from "react";
import * as Font from "expo-font";

const useFonts = () => {
  const dir = "../../assets/fonts/";

  let customFonts = {
    Roboto: require(`${dir}Roboto-Regular.ttf`),
    RobotoBlack: require(`${dir}Roboto-Black.ttf`),
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  return { fontsLoaded };
};

export default useFonts;
