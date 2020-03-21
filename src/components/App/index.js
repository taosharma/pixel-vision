/* So, the moving pieces are:
1. The blocks of colour, which can be postioned in any corner.
2. The icons, which can be position in any corner.
3. When an icon is clicked, it moves to the center. */

import React, { useState } from "react";

import svgStar from "../../svg/star.svg";
import svgRupee from "../../svg/gem.svg";
import svgPotion from "../../svg/potion.svg";
import svgSpaceship from "../../svg/spaceship.svg";

import css from "./App.module.css";

import ColouredMonocle from "../ColouredMonocle";
import Icon from "../Icon";

const spaceship = {
  src: svgSpaceship,
  alt: "Spaceship",
  position: 1,
  className: css.spaceship,
  background: css.home,
  area: css.topLeft
};
const star = {
  src: svgStar,
  alt: "Purple Star",
  position: 2,
  className: css.star,
  background: css.episodes,
  area: css.topRight
};
const rupee = {
  src: svgRupee,
  alt: "Green Rupee",
  position: 3,
  className: css.rupee,
  background: css.patreon,
  area: css.bottomLeft
};
const potion = {
  src: svgPotion,
  alt: "Potion Bottle",
  position: 4,
  className: css.potion,
  background: css.contact,
  area: css.bottomRight
};

function App() {
  const [centerIcon, setCenterIcon] = useState(spaceship);

  const [firstIcon, setFirstIcon] = useState();

  const [secondIcon, setSecondIcon] = useState(star);

  const [thirdIcon, setThirdIcon] = useState(rupee);

  const [fourthIcon, setFourthIcon] = useState(potion);

  function handleIcon(icon) {
    if (centerIcon.position === 1) {
      setFirstIcon(centerIcon);
    }
    if (centerIcon.position === 2) {
      setSecondIcon(centerIcon);
    }
    if (centerIcon.position === 3) {
      setThirdIcon(centerIcon);
    }
    if (centerIcon.position === 4) {
      setFourthIcon(centerIcon);
    }
    if (icon.position === 1) {
      setFirstIcon();
    }
    if (icon.position === 2) {
      setSecondIcon();
    }
    if (icon.position === 3) {
      setThirdIcon();
    }
    if (icon.position === 4) {
      setFourthIcon();
    }
    setCenterIcon(icon);
  }

  return (
    <main className={css.App}>
      <ColouredMonocle grid={css.content} {...centerIcon} />
      {firstIcon ? (
        <Icon icon={firstIcon} grid={css.first} handleIcon={handleIcon} />
      ) : (
        ""
      )}
      {secondIcon ? (
        <Icon icon={secondIcon} grid={css.second} handleIcon={handleIcon} />
      ) : (
        ""
      )}
      {thirdIcon ? (
        <Icon icon={thirdIcon} grid={css.third} handleIcon={handleIcon} />
      ) : (
        ""
      )}
      {fourthIcon ? (
        <Icon icon={fourthIcon} grid={css.fourth} handleIcon={handleIcon} />
      ) : (
        ""
      )}
      <section
        className={centerIcon.area + " " + centerIcon.sideColour}
      ></section>
      {/* <section className={css.header}>
        <h1 className={css.title}>Pixel Vision</h1>
      </section>
      <p className={css.text}>
        A podcast which examines games with a critical eye.
      </p> */}
    </main>
  );
}

export default App;
