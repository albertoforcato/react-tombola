import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TombolaGame from "./components/TombolaGame";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tombola_game" component={TombolaGame} />
          </Switch>
          <p>
            {console.log("PUBLIC_URL: ", process.env.PUBLIC_URL)}
          </p>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

export default App;
