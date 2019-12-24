import React from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import Bakers from './imgs/BakersBeach.jpg'
import Balloon from './imgs/BalloonOverFarmland.jpg'
import Boat from './imgs/BoathouseOnTheNarrow.jpg'
import Moose from './imgs/CanadianMoose.jpg'
import Ebirch from './imgs/EmergingBirches.jpg'
import Fbirch from './imgs/FallBirches.jpg'
import Fishtown from './imgs/Fishtown.jpg'
import Hero from './imgs/Hero.jpg'
import Hidden from './imgs/HiddenInTheTrees.jpg'
import LeeFarmFall from './imgs/LeelanauFallFarm.jpg'
import LilFarm from './imgs/LittleFarm.jpg'
import LupForest from './imgs/LupineForest.jpg'
import Barn from './imgs/M22Barn.jpg'
import PenView from './imgs/PeninsulaWineryView.jpg'
import Relax from './imgs/RelaxingOnLakeLeelanau.jpg'
import Ripples from './imgs/RipplesOnLakeLeelanau.jpg'
import Sun from './imgs/SunsetPines.jpg'
import Sweet from './imgs/SweetSpotOnTheNarrows.jpg'
import Chairs from './imgs/TwoChairsAndaGeranium.jpg'
import Viewk from './imgs/ViewFromKolarickRoad.jpg'

const images = [
  Bakers,
  Balloon,
  Boat,
  Moose,
  Ebirch,
  Fbirch,
  Fishtown,
  Hero,
  Hidden,
  LeeFarmFall,
  LilFarm,
  LupForest,
  Barn,
  PenView,
  Relax,
  Ripples,
  Sun,
  Sweet,
  Chairs,
  Viewk,
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 20) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        marginTop: "14rem",
        marginBottom: "5rem",
        background: "black",
        height: "75vh",
        width: "75vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;