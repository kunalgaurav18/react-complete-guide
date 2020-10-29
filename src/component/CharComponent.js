import React from "react";

const CharComponent = (props) => {
  const text = props.text.split("");
  return (
    <div>
      {text.map((t, i) => (
        <p
          style={{
            display: "inline-block",
            padding: "16px",
            textAlign: "center",
            margin: "16px",
            border: "1px solid black",
          }}
          key={i}
          onClick={() => props.delete(i)}
        >
          {t}
        </p>
      ))}
    </div>
  );
};

export default CharComponent;
