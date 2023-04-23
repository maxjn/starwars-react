import React from "react";

function PersonCard() {
  return (
    <div className="card">
      <h3>{}</h3>
      <p>Gender - {}</p>
      <p>Birth year - {}</p>
    </div>
  );
}

export default PersonCard;
