import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../theme/theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../store/reducers";
import { CacheProvider } from "@emotion/react";

const store = createStore(rootReducer);

function MyApp(props) {
  const { Component, pageProps } = props;
  const cache = createCache({ key: "css", prepend: true });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
