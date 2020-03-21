import React from "react";

import css from "./ColouredMonocle.module.css";

import BigCircle from "../BigCircle";
import Monocle from "../Monocle";

function ColouredMonocle({ grid, src, alt }) {
  return (
    <section className={grid}>
      <BigCircle />
      <img src={src} alt={alt} className={css.center}></img>
      <Monocle />
    </section>
  );
}

export default ColouredMonocle;
