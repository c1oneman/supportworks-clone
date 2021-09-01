import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/core/Nav";
import FooterDesktop from "./components/core/FooterDesktop";
import FooterMobile from "./components/core/FooterMobile";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Evergreen from "./components/pages/Evergreen";
import ScrollToTop from "./components/core/ScrollToTop";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/evergreen">
          <Evergreen />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <footer>
        <FooterDesktop />
        <FooterMobile />
      </footer>
      <ScrollToTop />
    </Router>
  );
}

export default App;
