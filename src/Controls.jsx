import React, { useContext } from "react";
import { mixtapeContext } from "./mixtapeContext";

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(mixtapeContext);

  return (
    <div className="controls">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
      </select>
      <button
        onClick={() =>
          setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
        }
      >
        {sortOrder}
      </button>
    </div>
  );
};
