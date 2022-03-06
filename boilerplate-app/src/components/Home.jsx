import { Link } from "react-router-dom";

import logo from "../logo.svg";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to react world. This is a boilerpate template for react apps
        using redux for state management
      </p>
      <Link to={"/data"}>Go to data page</Link>
    </header>
  );
}

export default Home;
