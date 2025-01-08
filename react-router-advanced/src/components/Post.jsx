import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  return <h3>Displaying post with ID: {id}</h3>;
}

export default Post;
