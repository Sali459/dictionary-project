import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    console.log(props.phonetic)
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="Listen"
        >
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
}

// implement the html5 audio API to implement the speaker icon instead of text