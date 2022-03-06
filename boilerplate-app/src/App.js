import { Route, Switch } from "react-router-dom";

import "./App.css";

import Data from "./components/Data";
import Home from "./components/Home";

function App() {
  const renderRoute = () => (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/data" component={Data} exact />
    </Switch>
  );

  return <div className="App">{renderRoute()}</div>;
}

export default App;
