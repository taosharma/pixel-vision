import React from "react";

import css from "./Monocle.module.css";

import monocle from "./monocle.svg";

function Monocle() {
  return <img src={monocle} alt={"Big Monocle"} className={css.Monocle}></img>;
}

export default Monocle;
