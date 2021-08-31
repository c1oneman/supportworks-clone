import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/core/Nav";
import FooterDesktop from "./components/core/FooterDesktop";
import FooterMobile from "./components/core/FooterMobile";
import Home from "./components/pages/Home";
function App() {
  return (
    <div>
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <FooterDesktop />
          <FooterMobile />
        </footer>
      </Router>
    </div>
  );
}

export default App;
