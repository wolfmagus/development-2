import React from 'react';
import {useState} from 'react'

function List({ meme, onSaveMeme, savedMemes, setSavedMemes, onDeleteMeme }) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [editIndex, setEditIndex] = useState(null);
  const [editedTopText, setEditedTopText] = useState('');
  const [editedBottomText, setEditedBottomText] = useState('');
  
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedTopText(savedMemes[index].topText);
    setEditedBottomText(savedMemes[index].bottomText);
  };

  const handleSaveEdit = (index) => {
    const updatedMemes = [...savedMemes];
    updatedMemes[index].topText = editedTopText;
    updatedMemes[index].bottomText = editedBottomText;
    setSavedMemes(updatedMemes);
    setEditIndex(null);
  };
  //console.log(meme)
  //console.log(onSaveMeme)
  console.log(savedMemes)

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSaveMeme({ ...meme, topText, bottomText }); // Pass the current meme and text inputs to onSaveMeme
          setTopText('');
          setBottomText('');
        }}
      >
        
        <button type='submit'>Save Meme</button>
      </form>

      {/* Display the list of saved memes */}
      {/* Overflow for scrolling through saved memes can go in div below */}
      <div className="over--flow">
      {savedMemes.map((savedMeme, index) => (
        <div className="saved-meme" key={index}>
          <h2 className="meme-text-top">{savedMeme.topText}</h2>
          <img className="meme-image" src={savedMeme.randomImage} alt="Meme" />
          <h2 className="meme-text-bottom">{savedMeme.bottomText}</h2>
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={editedTopText}
                onChange={(e) => setEditedTopText(e.target.value)}
              />
              <input
                type="text"
                value={editedBottomText}
                onChange={(e) => setEditedBottomText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => onDeleteMeme(index)}>Delete</button>
              <button onClick={() => handleEditClick(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}
      </div>
    </main>
  );
}

export default List;