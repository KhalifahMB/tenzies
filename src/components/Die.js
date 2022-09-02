import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  // i tried this but didnt work
  // let Elements;
  // function Rolls() {
  //   for (let i = 0; i < props.value; i++) {
  //     console.log(i);
  //     return (Elements = <span className="dot"></span>);
  //   }
  // }
  // Rolls();
  return (
    <div className="die-face" onClick={props.handleClick} style={styles}>
      <h2 className="die-num">{props.value}</h2>

      {/* {Elements} */}
    </div>
  );
}
