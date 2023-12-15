import React, { useState } from "react";

export const mixtapeContext = React.createContext(null);

export function MixtapeProvider({ children, songs }) {
  const [genre, setGenre] = useState("tous");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <mixtapeContext.Provider
      value={{ songs, genre, sortOrder, setGenre, setSortOrder }}
    >
      {children}
    </mixtapeContext.Provider>
  );
}
