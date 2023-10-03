// import React from 'react';
// import {useState} from 'react'
// function List(props) {
//     const {meme} = props
// const [savedMemes, setSavedMemes] = useState([])
//     function handleSubmit(e){
//                e.preventDefault()
//                 setSavedMemes(props)

//             //    const topText = topText
//             //    const bottomText = bottomText
//             //    console.log(topText, bottomText)
//                console.log(meme) //-------- This passes all the memes!!!!
//             // setTopText("");
//             // setBottomText("");
                
//             // Here you can use the topText and bottomText state values to generate the meme.
//             // You could use a third-party library or an API to generate the meme image with the text.
//             // For simplicity, I'll just show a console log with the text.
//             }

//             // const handleSubmit = (e) => {
//             //     e.preventDefault();
//             //     setSavedMemes((prevMemes) => [
//             //       ...prevMemes,
//             //       {
//             //         topText: topText,
//             //         bottomText: bottomText,
//             //         imgUrl: randomImage,
//             //         id: Math.floor(Math.random() * 1000000),
//             //       },
//             //     ]);
            
//             //     setRandomImage(
//             //       memes[Math.floor(Math.random() * memes.length)].url
//             //     );
            
//             //     setTopText("");
//             //     setBottomText("");
//             //   };
//     return ( 
//     <main>
//         <form onSubmit={handleSubmit}>
//             <button>Submit</button>
//             <div>Here is where the list will go</div>
//         </form> 
//     </main>
    
//     );
// }

// export default List;

//===========NEW CODE TO UPDATE PROJECT======================
// import React from 'react';

// function List({ meme, onSaveMeme, savedMemes }) {
//   return (
//     <main>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSaveMeme();
//         }}
//       >
//         {/* Your form content goes here */}
//         <button type='submit'>Save Meme</button>
//       </form>

//       {/* Display the list of saved memes */}
//       <div>
//         {savedMemes.map((savedMeme, index) => (
//           <div key={index}>
//             {/* Display the saved meme information */}
//             <img src={savedMeme.randomImage} alt='Meme' />
//             <div>{savedMeme.topText}</div>
//             <div>{savedMeme.bottomText}</div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default List;

//===========NEW CODE TO UPDATE PROJECT VERSION 2======================

import React from 'react';
// Define the styles as objects
// const memeStyle = {
//     width: '300px',
//     height: '300px',
//     objectFit: 'cover',
//     border: '2px solid #000',
//   };
  
//   const textStyle = {
//     textAlign: 'center',
//     // fontSize: '20px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#000',
//     padding: '8px 16px',
//     margin: '0',
//     //
//     position: 'absolute',
//     width: '80%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     margin: '15px 0',
//     padding: '0 5px',
//     fontFamily: 'impact, sans-serif',
//     fontSize: '3em',
//     textTransform: 'uppercase',
//     color: 'white'
//  };

function List({ meme, onSaveMeme, savedMemes }) {
  const [topText, setTopText] = React.useState('');
  const [bottomText, setBottomText] = React.useState('');

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
          <div className ="saved-meme" key={index}>
            {/* Display the saved meme information */}
            <h2 className="meme-text-top">{savedMeme.topText}</h2>
            <img 
                className='meme-image' 
                src={savedMeme.randomImage} 
                alt='Meme'
                //style={memeStyle} 
            />
            {/* <h2 style={textStyle}>{savedMeme.topText}</h2>
            <h2 style={textStyle}>{savedMeme.bottomText}</h2> */}
            <h2 className="meme-text-bottom">{savedMeme.bottomText}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

export default List;


//Didn't work
// import React from 'react';
// // import './list.css'; // Import the CSS file with the provided styles

// function List({ meme, onSaveMeme, savedMemes }) {
//   const [topText, setTopText] = React.useState('');
//   const [bottomText, setBottomText] = React.useState('');

//   return (
//     <main>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSaveMeme({ ...meme, topText, bottomText }); // Pass the current meme and text inputs to onSaveMeme
//           setTopText('');
//           setBottomText('');
//         }}
//       >
        // {/* <input
        //   className='line-one'
        //   type='text'
        //   placeholder='top line'
        //   value={topText}
        //   onChange={(e) => setTopText(e.target.value)}
        // ></input>
        // <input
        //   className='line-two'
        //   type='text'
        //   placeholder='bottom line'
        //   value={bottomText}
        //   onChange={(e) => setBottomText(e.target.value)}
        // ></input> */}
       
       
       
       
//         {/* <button className='submit-button' type='submit'>
//           Save Meme
//         </button>
//       </form>

//       <div className='over--flow'>
//         {savedMemes.map((savedMeme, index) => (
//           <div key={index}>
//             <img
//               className='meme-image'
//               src={savedMeme.randomImage}
//               alt='Meme'
//             />
//             <h2 className='meme-text top'>{savedMeme.topText}</h2>
//             <h2 className='meme-text bottom'>{savedMeme.bottomText}</h2>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default List; */}


