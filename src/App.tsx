import { observer } from "mobx-react-lite";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import AppContext from "./context";

const App = observer(() => {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <Layout>
          <Header />
          <AppRouter />
        </Layout>
      </Router>
    </AppContext.Provider>
  );
});

export default App;
