import React from "react";

const Note = (props) => {
  return (
    <>
      <div style={{ border: "1px solid black", display: "flex" }}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button
          onClick={() => {
            props.deleteitem(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Note;
