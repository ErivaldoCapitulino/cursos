import React, { cloneElement } from "react";
import "./FamiliaMembro";

const Familia = (props) => {
  return (
    <div>
      {React.Children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

export default Familia;
