import { useState } from "react";

export default function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));

  function play(i: number) {
    if (cells[i]) return;
    const copy = [...cells];
    copy[i] = "X";
    setCells(copy);
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)" }}>
      {cells.map((c, i) => (
        <button key={i} onClick={() => play(i)} style={{ height: 80 }}>
          {c}
        </button>
      ))}
    </div>
  );
}
