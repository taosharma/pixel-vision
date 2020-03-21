import React from "react";

import css from "./Icon.module.css";

function Icon({ icon, grid, handleIcon }) {
  const { src, alt, className } = icon;
  return (
    <img
      onClick={() => handleIcon(icon)}
      className={className + " " + grid + " " + css.icon}
      src={src}
      alt={alt}
    ></img>
  );
}

export default Icon;
