import React from "react";

const messages = ["one", "two", "three"];
let i = 0;
function AlertButton() {
  return (
    <>
      <h1>click on the button</h1>
      <button
        onClick={() => {
          alert(messages[i++ % messages.length]);
        }}>
        Click on me
      </button>
    </>
  );
}

export default AlertButton;
