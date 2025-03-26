import React from "react";
import Typewriter from "typewriter-effect";

function WhoIm() {
  return (
    <Typewriter
      options={{
        strings: [
          "Un Développeur Web ?",
          "Un joueur de football amateur ?",
          "Un Employé chez Teclib' ?",
          "Un jeune homme dans la vingtaine ?",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay: 85
      }}
    />
  );
}

export default WhoIm;
