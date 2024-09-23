import { useState } from "react";
export default function Movesboard() {
  let [Moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, purple: 0 });

  let updateBlue = () => {
    Moves.blue += 1;
    console.log(`Moves.blue = ${Moves.blue}`);

    setMoves({ ...Moves });
  };
  let updateYellow = () => {
    Moves.yellow += 1;
    console.log(`Moves.yellow = ${Moves.yellow}`);

    setMoves({ ...Moves });
  };
  let updateRed = () => {
    Moves.red += 1;
    console.log(`Moves.red = ${Moves.red}`);

    setMoves({ ...Moves });
  };
  let updatePurple = () => {
    Moves.purple += 1;
    console.log(`Moves.purple = ${Moves.purple}`);

    setMoves({ ...Moves });
  };
  return (
    <div>
      <p>Game Begins here! </p>
      <div className="Board">
        <p>Blue moves ={Moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "Blue" }}>
          +1
        </button>
        <p>Yellow moves ={Moves.yellow}</p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
        <p>Red moves ={Moves.red}</p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
        <p>Purple moves ={Moves.purple}</p>
        <button onClick={updatePurple} style={{ backgroundColor: "purple" }}>
          +1
        </button>
      </div>
    </div>
  );
}
