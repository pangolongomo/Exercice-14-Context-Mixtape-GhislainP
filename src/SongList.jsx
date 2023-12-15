import React, { useContext } from "react";
import { mixtapeContext } from "./mixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(mixtapeContext);
  console.log(sortOrder);
  return (
    <>
      {songs
        .filter((song) => {
          if (genre === "all") return song;
          return song.genre === genre;
        })
        .sort((older, newer) => {
          if (sortOrder === "ascending") {
            return older.year - newer.year;
          } else {
            return newer.year - older.year;
          }
        })
        .map((song, index) => (
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
