import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import TombolaGame from "./components/TombolaGame";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main role="main" class="flex-shrink-0">
          <TombolaGame />
        </main>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

const Loader = () => (
  <div className="container d-flex justify-content-center align-items-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default App;
