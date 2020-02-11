import React from "react";

const WrapSection = ({ className, children }) => (
  <section className="container-fluid">
    <section className="row justify-content-center">{children}</section>
  </section>
);

export default WrapSection;
