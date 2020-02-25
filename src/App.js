import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TombolaGame from "./components/TombolaGame";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tombola_game" component={TombolaGame}/>
          </Switch>
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
