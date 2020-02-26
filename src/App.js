import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TombolaGame from "./components/TombolaGame";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TombolaGame} />
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
