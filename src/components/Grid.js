import Box from "../components/Box";
import { useState } from "react";
import { useEffect } from "react";
import "./Grid.css";

const Grid = props => {
  const [currentBlink, setCurrentBlink] = useState(0);
  const [blinkingBoxes, setBlinkingBoxes] = useState(
    Array.from({ length: 9 }, (_) => false)
  );

  const handleClick = (event) => {
    console.log(event.target.id);
  };

  const handleNext = () => {
    const updatedBlinks = blinkingBoxes;
    updatedBlinks[currentBlink] = true;
    setBlinkingBoxes([...updatedBlinks]);
  };

  useEffect(() => {
     setCurrentBlink((prev) => prev + 1);
  }, [blinkingBoxes]);

  return (
    <div>
      <div className="grid-container">
        <Box id={0} blinking={blinkingBoxes[0]} boxClicked={handleClick}></Box>
        <Box id={1} blinking={blinkingBoxes[1]} boxClicked={handleClick}></Box>
        <Box id={2} blinking={blinkingBoxes[2]} boxClicked={handleClick}></Box>
        <Box id={3} blinking={blinkingBoxes[3]} boxClicked={handleClick}></Box>
        <Box id={4} blinking={blinkingBoxes[4]} boxClicked={handleClick}></Box>
        <Box id={5} blinking={blinkingBoxes[5]} boxClicked={handleClick}></Box>
        <Box id={6} blinking={blinkingBoxes[6]} boxClicked={handleClick}></Box>
        <Box id={7} blinking={blinkingBoxes[7]} boxClicked={handleClick}></Box>
        <Box id={8} blinking={blinkingBoxes[8]} boxClicked={handleClick}></Box>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Grid;
