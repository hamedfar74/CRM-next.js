import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utility/createEmotionCache";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/modules/ThemeContext";


const clientSideEmotionCache = createEmotionCache();
function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
 
  return (
    <CacheProvider value={emotionCache}>
      
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      
    </CacheProvider>
  );
}

export default App;
