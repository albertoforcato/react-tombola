import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default App;
