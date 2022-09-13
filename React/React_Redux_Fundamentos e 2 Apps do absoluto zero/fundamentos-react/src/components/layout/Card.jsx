import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
