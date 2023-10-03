import React, { useEffect, useState } from 'react';
import List from './List';
import axios from 'axios';
// import './index.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);
  const [savedMemes, setSavedMemes] = useState([]);

{/* <List
  meme={meme}
  onSaveMeme={onSaveMeme}
  onDeleteMeme={onDeleteMeme} // Pass the onDeleteMeme function here
  savedMemes={savedMemes}
/> */}


  function memePicker() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  // useEffect(() => {
  //   fetch('https://api.imgflip.com/get_memes')
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.memes))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes') // Use axios.get() instead of fetch()
      .then((response) => {
        const data = response.data.data;
        setAllMemes(data.memes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  function onSaveMeme() {
    setSavedMemes((prevMemes) => [...prevMemes, meme]);
  }

  function onDeleteMeme(index) {
    setSavedMemes((prevMemes) => {
      const updatedMemes = [...prevMemes];
      updatedMemes.splice(index, 1);
      return updatedMemes;
    });
  }

  return (
    <div className='form-container'>
      <input
        className='line-one'
        type='text'
        placeholder='top line'
        name='topText'
        value={meme.topText}
        onChange={(e) =>
          setMeme((prevMeme) => ({ ...prevMeme, topText: e.target.value }))
        }
      ></input>
      <input
        className='line-two'
        type='text'
        placeholder='bottom line'
        name='bottomText'
        value={meme.bottomText}
        onChange={(e) =>
          setMeme((prevMeme) => ({ ...prevMeme, bottomText: e.target.value }))
        }
      ></input>
      <button className='submit-button' onClick={memePicker}>
        Get a new meme image 🖼
      </button>
      <div className='meme'>
        <img className='meme-image' src={meme.randomImage} alt='Meme' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
      <div>
        <h1>List</h1>
        {/* Pass the onSaveMeme function, meme, and savedMemes array to the List component */}
        <List meme={meme} onSaveMeme={onSaveMeme} savedMemes={savedMemes} setSavedMemes={setSavedMemes} onDeleteMeme={onDeleteMeme} />
      </div>
    </div>
  );
}


