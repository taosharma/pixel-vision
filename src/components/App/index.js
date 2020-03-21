import React, { useState } from "react";

import svgStar from "../../svg/star.svg";
import svgRupee from "../../svg/gem.svg";
// import svgTreasure from "../../svg/treasure.svg";
import svgPotion from "../../svg/potion.svg";
import svgSpaceship from "../../svg/spaceship.svg";

import css from "./App.module.css";

import ColouredMonocle from "../ColouredMonocle";
import Icon from "../Icon";

const star = {
  src: svgStar,
  alt: "Purple Star",
  className: css.star,
  sideColour: css.episodes
};
const rupee = {
  src: svgRupee,
  alt: "Green Rupee",
  className: css.rupee,
  sideColour: css.patreon
};
// const treasure = {
//   src: svgTreasure,
//   alt: "Treasure Chest",
//   className: css.treasure,
//   sideColour: css.about
// };
const potion = {
  src: svgPotion,
  alt: "Potion Bottle",
  className: css.potion,
  sideColour: css.contact
};
const spaceship = {
  src: svgSpaceship,
  alt: "Spaceship",
  className: css.spaceship,
  sideColour: css.home
};

function App() {
  const [centerIcon, setCenterIcon] = useState(spaceship);

  const [firstIcon, setFirstIcon] = useState(star);

  const [secondIcon, setSecondIcon] = useState(rupee);

  // const [thirdIcon, setThirdIcon] = useState(treasure);

  const [fourthIcon, setFourthIcon] = useState(potion);

  function handleFirstIcon(icon) {
    setFirstIcon(centerIcon);
    setCenterIcon(icon);
    setSideColour(icon.sideColour);
  }
  function handleSecondIcon(icon) {
    setSecondIcon(centerIcon);
    setCenterIcon(icon);
    setSideColour(icon.sideColour);
  }
  // function handleThirdIcon(icon) {
  //   setThirdIcon(centerIcon);
  //   setCenterIcon(icon);
  //   setSideColour(icon.sideColour);
  // }
  function handleFourthIcon(icon) {
    setFourthIcon(centerIcon);
    setCenterIcon(icon);
    setSideColour(icon.sideColour);
  }

  const [sideColour, setSideColour] = useState(spaceship.sideColour);

  return (
    <main className={css.App}>
      <section className={sideColour}></section>
      <ColouredMonocle grid={css.content} {...centerIcon} />
      <Icon icon={firstIcon} grid={css.first} handleIcon={handleFirstIcon} />
      <Icon icon={secondIcon} grid={css.second} handleIcon={handleSecondIcon} />
      {/* <Icon icon={thirdIcon} grid={css.third} handleIcon={handleThirdIcon} /> */}
      <Icon icon={fourthIcon} grid={css.fourth} handleIcon={handleFourthIcon} />
      <section className={css.header}>
        <h1 className={css.header}>Pixel Vision</h1>
      </section>
      <p className={css.text}>
        A podcast which examines games with a critical eye.
      </p>
    </main>
  );
}

export default App;
