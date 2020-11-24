import React, { useContext } from "react";
import { NDContext }  from "./NDContext";
import NDCard from "./NDCard";


// Recieving an error on line 7 >>> TO DO <<<
function NDs(props) {
  const {data} = useContext(NDContext);
  console.log(data);

  return (
    <>
      <h1 className="head__text">Natural Disasters</h1>
      <div className="all__news">
        {data
          ? data.results.map((naturalDisasters) => (
              <NDCard data={naturalDisasters} />
            ))
          : "Loading"}
      </div>
    </>
  );
}

export default NDs;