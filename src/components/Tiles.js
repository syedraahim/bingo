import React, { useState, useEffect } from "react";
import Celebrate from './Celebrate';
import BingoTile from "./Card";

function Tiles(props) {
  const [state, setState] = useState({ checked: { [12]: true }, flag: 0, diff: 0 });
  useEffect(() => {
    state.won == true && setTimeout(() => {
      setState((state) => {
        const won = false;
        console.log('hello')
        return {
          ...state,
          won
        };
      });
    }, 4000);
  }, [state.won]);
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
      range.every((index) => checked[index * 5 + index])
      ||
      range.every((index) => checked[index * 5 + 4 - index])
    );
  };
  const isNewCombination = (checked) => {
    let flag = state.flag;
    const range = [0, 1, 2, 3, 4];
    if (undefined !==
      range.find((row) =>
        range.every((column) => checked[row * 5 + column])
      )) {
      flag += 1;
    }
    if (undefined !==
      [5, 6, 7, 8, 9].find((row) =>
        [5, 6, 7, 8, 9].every((column) => checked[row * 5 + column])
      )) {
      flag += 1;
    }
    if (undefined !==
      range.find((column) =>
        range.every((row) => checked[row * 5 + column])
      )) {
      flag += 1;
    }
    if (range.every((index) => checked[index * 5 + index])) {
      flag += 1;
    }
    if (range.every((index) => checked[index * 5 + 4 - index])) {
      flag += 1;
    }
    if (!(range.every((index) => checked[index * 5 + 4 - index])) &&
      (!(range.every((index) => checked[index * 5 + index])) && (!(undefined !==
        range.find((column) =>
          range.every((row) => checked[row * 5 + column])
        ))) && (!(undefined !==
          range.find((column) =>
            range.every((row) => checked[row * 5 + column])
          ))))) {
      flag = 0;
    }
    console.log(flag, 'flag func')
    // setState((state) => {
    //   return {
    //     ...state,
    //     flag
    //   }
    // })
    return flag;
  }
  const toggle = (id) =>
    setState((state) => {
      let won = false;
      let diff = state.flag == 0  ? 0 : state.diff;
      const checked = { ...state.checked, [id]: !state.checked[id] };
      console.log(checked)
      const flag = isNewCombination(checked)
      if ((flag - state.flag) > diff) {
        won = true;
        diff = flag - state.flag;

      }
      console.log(flag, won, 'flag')
      // const won = isWon(checked);

      return {
        ...state,
        checked,
        won,
        flag,
        diff
      };
    });

  return (
    <>
      <div className="wrapper card-columns">
        {Object.keys(props.data).map((id, key) => (
          <BingoTile
            data={props.data[id]}
            id={id}
            key={key}
            isSet={!!state.checked[id]}
            onToggle={() => toggle(id)}
          />

        ))}
      </div>
      {state.won && <Celebrate />}
    </>
  );
}

export default Tiles;
