import React from "react";
import "../App.css";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
