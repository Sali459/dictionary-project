import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic)
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
}

// implement the html5 audio API to implement the speaker icon instead of text