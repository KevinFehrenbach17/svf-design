import React from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import Bouqet from './imgs/BountifulBouquet.jpg'
import Hydrangeas from './imgs/Hydrangeas.jpg'
import Mon from './imgs/MonarchsAndPoppies.jpg'
import Mom from './imgs/MyMothersGarden.jpg'
import Poppies from './imgs/Poppies.jpg'
import PoppiesPlus from './imgs/PoppiesAndLaceII.jpg'

const images = [
    Bouqet,
    Hydrangeas,
    Mon,
    Mom,
    Poppies,
    PoppiesPlus
];

function App() {
  const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       if (index === 4) {
//         setIndex(0);
//       } else {
//         setIndex(prev => prev + 1);
//       }
//     }, 10000);
//     return () => clearInterval(timer);
//   }, [index]);

  return (
    <Gallery
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
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