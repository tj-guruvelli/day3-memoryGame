import { useEffect, useState } from "react";
import Grid from "./Grid";

const Game = () => {
  const gamePattern = [0, 4, 7, 4, 3, 2];
  const [patternSize, setPatternSize] = useState(1);
  const [userPattern, setUserPattern] = useState([]);

  const addtoUserPattern = (id) => {
    setuserPattern([...userPattern, Number(id)]);
  };

  useEffect(() => {}, [userPattern]);

  return (
    <div>
      <Grid
        pattern={gamePattern}
        size={patternSize}
        handleBoxClick={addtoUserPattern}
      ></Grid>
    </div>
  );
};

export default Game;
