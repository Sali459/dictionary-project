import React, { useState } from "react"
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
  // 3.
  let [keyword, setKeyword] = useState("");

  // 6.
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  // 2.
  function search(event) {
    event.preventDefault(); //Prevents the page from reloading
    alert(`Searching for ${keyword} definition`);
  
    //5.
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse);
  }

  // 4.
    function handleKeywordChange(event) {
    setKeyword(event.target.value); //stores the word into a state
  }

  // 1.
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}