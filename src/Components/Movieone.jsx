import React from "react";
import { useParams } from "react-router-dom";
const Movieone = ({ id }) => {
  const params = useParams();
  console.log({ id });
  return (
    <div>
      <h1>{params.id}</h1>

      <h3>hyy</h3>
      <h1>{id}</h1>
    </div>
  );
};

export default Movieone;
