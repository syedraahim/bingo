import React, { useState } from "react";
import Celebrate from './Celebrate';
import BingoTile from "./Card";

function Tiles(props) {
  const [state, setState] = useState({ checked: {[12] : true} });
  const isWon = (checked) => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
      range.find((row) =>
        range.every((column) => checked[row * 5 + column])
      ) ||
      undefined !==
      range.find((column) =>
        range.every((row) => checked[row * 5 + column])
      ) ||
      range.every((index) => checked[index * 5 + index]) ||
      range.every((index) => checked[index * 5 + 4 - index])
    );
  };
  const toggle = (id) =>
    setState((state) => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      console.log(checked)
      const won = isWon(checked);
      
      return {
        ...state,
        checked,
        won
      };
    });

  return (
    <>
      <div className="wrapper card-columns">
        {Object.keys(props.data).map((id) => (
          <>
            <BingoTile
              data={props.data[id]}
              id={id}
              isSet={!!state.checked[id]}
              onToggle={() => toggle(id)}
            />
          </>
        ))}
      </div>
      {state.won && <Celebrate />}
    </>
  );
}

export default Tiles;
