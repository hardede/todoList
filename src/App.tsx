import { observer } from "mobx-react-lite";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import AppContext from "./context";
import { useTheme } from "./hooks/useTheme";

const App = observer(() => {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  console.log(theme);

  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Layout theme={theme}>
          <Header
            theme={theme}
            handleLightThemeClick={handleLightThemeClick}
            handleDarkThemeClick={handleDarkThemeClick}
          />
          <AppRouter />
        </Layout>
      </Router>
    </AppContext.Provider>
  );
});

export default App;
