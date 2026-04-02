import React, { useState } from "react"
import "./Dictionary.css"

export default function Dictionary() {
  // 3.
  let [keyword, setKeyword] = useState("");

  // 2.
  function search(event) {
    event.preventDefault(); //Prevents the page from reloading
    alert(`Searching for ${keyword} definition`);
  }

  // 4.
  function handleKeywordChange(event) {
    setKeyword(event.target.value); //stores the word into a state
  }

  // 1.
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}