import React, { useEffect, useState } from "react";
import MemeWidget from "./MemeWidget";
import MemeGenerator from "./MemeGenerator";
import axios from "axios";

const App = () => {
  const [randomImage, setRandomImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memes, setMemes] = useState([]);
  const [savedMemes, setSavedMemes] = useState([]);

  // Fetch memes from the API
  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemes(res.data.data.memes);
        setRandomImage(
          res.data.data.memes[
            Math.floor(Math.random() * res.data.data.memes.length)
          ].url
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteSavedMeme = (id) => {
    const savedMemesAfterDelete = savedMemes.filter((meme) => meme.id !== id);
    setSavedMemes(savedMemesAfterDelete);
  };

  const saveEditMeme = (id, top, bottom) => {
    const savedEditedMemes = savedMemes.map((meme) => {
      if (meme.id === id) {
        return { ...meme, topText: top, bottomText: bottom };
      } else {
        return meme;
      }
    });

    setSavedMemes(savedEditedMemes);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "topText") {
      setTopText(value);
    } else if (name === "bottomText") {
      setBottomText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedMemes((prevMemes) => [
      ...prevMemes,
      {
        topText: topText,
        bottomText: bottomText,
        imgUrl: randomImage,
        id: Math.floor(Math.random() * 1000000),
      },
    ]);

    setRandomImage(
      memes[Math.floor(Math.random() * memes.length)].url
    );

    setTopText("");
    setBottomText("");
  };

  const allSavedMemes = savedMemes.map((meme, i) => (
    <MemeWidget
      key={i}
      id={meme.id}
      toptext={meme.topText}
      bottomtext={meme.bottomText}
      image={meme.imgUrl}
      delete={deleteSavedMeme}
      saveEditMeme={saveEditMeme}
      changeHandler={handleChange}
    />
  ));

  return (
    <div className="master">
      <div className="left-container">
        <h1>React Meme Generator</h1>
        <MemeGenerator
          randomImage={randomImage}
          topText={topText}
          bottomText={bottomText}
          submitForm={handleSubmit}
          changeHandler={handleChange}
        />
      </div>
      <div className="right-container">{allSavedMemes}</div>
    </div>
  );
};

export default App;
