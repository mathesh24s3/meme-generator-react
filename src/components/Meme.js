import React, { useState, useEffect } from "react";
import "../styles/meme.css";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemesData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemesData();
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imageUrl: allMemes[randomNumber].url,
      };
    });
  }

  console.log(meme);
  return (
    <div id="meme-generator">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          name="topText"
          id="top-text"
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          id="bottom-text"
          placeholder="bottom text"
          onChange={handleChange}
        />
        <button onClick={getNewMeme}>
          Get a new meme image <img src="images/imageicon.png" />
        </button>
      </form>
      <div id="meme">
        <p id="meme-top_text" className="meme-text">
          {meme.topText}
        </p>
        <p id="meme-bottom_text" className="meme-text">
          {meme.bottomText}
        </p>
        <img src={meme.imageUrl} alt="meme" className="meme-img" />
      </div>
    </div>
  );
}
