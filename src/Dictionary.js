import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  // 3.
  let [keyword, setKeyword] = useState("sunset");
  //7.
  let [results, setResults] = useState(null);
  //9.
  let [loaded, setLoaded] = useState(false);
  //13.
  let [photos, setPhotos] = useState(null);

  // 6.
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //13.
  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }


  //8.
  function search() {
    //5.
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    //12.
    let imagesApiKey = "a8boetdc4878122040379fe8f04a70c1";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}&per_page=6`;
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  // 2.
  function handleSubmit(event) {
    event.preventDefault(); //Prevents the page from reloading
    search();
  }

  // 4.
  function handleKeywordChange(event) {
    setKeyword(event.target.value); //stores the word into a state
  }

  // 11. 
  function load() {
    setLoaded(true);
    search();
  }

  //10.
  if (loaded) {
    // 1.
    return (
      <div className="Dictionary">
        <section>
          <h1>Search up a word</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="sunset"
            />
          </form>
          <div className="hint">
            Suggested words: setting, beverage, activity, flora...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
