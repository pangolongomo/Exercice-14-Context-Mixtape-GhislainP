import React, { useContext } from "react";
import { mixtapeContext } from "./mixtapeContext";

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder, songs } =
    useContext(mixtapeContext);

  const genreList = [...new Set(songs.map((song) => song.genre))];

  return (
    <div className="controls">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        {genreList.map((genr) => (
          <option key={genr} value={genr}>
            {genr.charAt(0).toUpperCase() + genr.slice(1)}
          </option>
        ))}
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
