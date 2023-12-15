import React, { useContext } from "react";
import { mixtapeContext } from "./mixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(mixtapeContext);
  return (
    <>
      {songs.map((song, index) => (
        <Song
          key={index}
          artist={song.artist}
          genre={song.genre}
          name={song.name}
          year={song.year}
        />
      ))}
    </>
  );
};
