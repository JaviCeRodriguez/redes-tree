import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { global } from '@stitches/react';
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

const globalStyles = global({
  'body': {
    margin: '0rem',
    padding: '0rem',
    height: '100vh'
  },
  '#root': {
    height: '100%',
  },
  '*': {
    listStyle: 'none',
    textDecoration: 'none',
    lineHeight: '0.5rem',
  }
})

const App = () => {
  globalStyles()

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:user" component={User} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
