import React from "react";
import ReactDOM from "react-dom/client";

function Box() {
  return <div className="box">a box</div>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Box />);
