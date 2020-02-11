import React from "react";

const WrapSection = ({ className, children }) => (
  <section className="container-fluid">
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-3">
        {children}
      </section>
    </section>
  </section>
);

export default WrapSection;
