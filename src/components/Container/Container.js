import React from "react";
import css from "./Container.modile.css";

const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default Container;
