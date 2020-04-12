import React from "react";

const Loading = props => {
  const { data } = props;
  return (
    <div>
      <h2>{data.title}</h2>
      <h2>{data.time}</h2>
    </div>
  );
};

export default Loading;
