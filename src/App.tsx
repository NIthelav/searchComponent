import React, { useCallback, useEffect, useState } from "react";
import { SearchList } from "./components/SearchList/SearchList";
import { RegionProps } from "./typings/RegionProps";

const fetchData = async (path: string = "data/regions.json") => {
  const data = await fetch(path).then((e) => e.json());
  return data;
};

function App() {
  const [regions, setRegions] = useState([] as RegionProps[]);
  useEffect(() => {
    fetchData().then(setRegions);
  }, []);

  return <SearchList list={regions}></SearchList>;
}

export default App;

