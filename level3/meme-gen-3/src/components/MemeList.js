//========VERSION 1===========
import React from "react"
import {useState} from "react"

// Inside MemeGen component:

function MemeList(props) {
    const { image } = props;
    // const [meme, setMeme] = useState(image.randomImage);

  
    function handleButtonClick() {
      // Update the meme state with a new value
      //setMeme("https://example.com/new-meme-image.jpg");
    }

      function handleSubmit(e) {
    e.preventDefault();
    //setMeme(meme.toptext)
    //console.log(meme.topText, meme.bottomText);
    console.log(meme);
//------------------- ON SUBMIT UPDATE THE STATE PROPERTIES TOP AND BOTTOM TEXT TO USER'S INPUT ---------------

  }
  
    return (
      <main>
        <h1>List of Memes</h1>
        <form onSubmit={handleSubmit}>
        <img src={meme} alt="Meme" />
        <button onClick={handleButtonClick}>Create Meme</button>
        </form>
      </main>
    );
  }
export default MemeList


//=========VERSION 2==============
// import React, { useState } from "react";


// // Inside MemeGen component:

// function MemeGen(props) {
//   const { image } = props;

//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: image.randomImage,
//   });

//   // function handleButtonClick() {
//   //   // Update the meme state with a new value
//   //   // Not needed anymore as we are updating the state on form submission.
//   // }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(meme); // Log the current state for testing purposes

//     // Now you can combine the top and bottom text with the random image and set it in the state.
//     const newMeme = {
//       ...meme,
//       randomImage: image.randomImage, // Replace `image.randomImage` with your code to get a new random image
//     };

//     setMeme(newMeme); // Update the state with the new meme data
//   }

//   return (
//     <main>
//       <h1>List of Memes</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Top text"
//           className="form--input"
//           value={meme.topText}
//           onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Bottom text"
//           className="form--input"
//           value={meme.bottomText}
//           onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
//         />
//         <img src={meme.randomImage} alt="Meme" /> {/* Display the random image from the state */}
//         <button type="submit">Create Meme</button>
//       </form>
//     </main>
//   );
// }

// export default MemeGen;

//========VERSION 3=============
// Inside MemeGen component:
//import React, { useState } from "react";


// function MemeGen(props) {
//   const { image } = props;

//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: image.randomImage,
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(meme); // Log the current state for testing purposes

//     // Now you can combine the top and bottom text with the random image and set it in the state.
//     const newMeme = {
//       ...meme,
//       randomImage: image.randomImage, // Replace `image.randomImage` with your code to get a new random image
//     };

//     setMeme(newMeme); // Update the state with the new meme data
//   }

//   return (
//     <main>
//       <h1>List of Memes</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="meme-container">
//           <div className="meme-image-container">
//             <img src={meme.randomImage} alt="Meme" /> {/* Display the random image from the state */}
//           </div>
//           <div className="meme-text-container">
//             <input
//               type="text"
//               placeholder="Top text"
//               className="form--input"
//               value={meme.topText}
//               onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Bottom text"
//               className="form--input"
//               value={meme.bottomText}
//               onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
//             />
//           </div>
//         </div>
//         <button type="submit">Create Meme</button>
//       </form>
//     </main>
//   );
// }

// export default MemeGen;

//============VERSION 4===================
// import React, { useState } from "react";

// // Inside MemeGen component:

// function MemeGen(props) {
//   const { image } = props;

//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: image.randomImage,
//   });

//   const [memeText, setMemeText] = useState(""); // New state to store the combined text

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(meme); // Log the current state for testing purposes

//     // Now you can combine the top and bottom text with the random image and set it in the state.
//     const newMeme = {
//       ...meme,
//       randomImage: image.randomImage, // Replace `image.randomImage` with your code to get a new random image
//     };

//     setMeme(newMeme); // Update the state with the new meme data

//     // Combine the top and bottom text and set it to memeText state
//     setMemeText(`${meme.topText} ${meme.bottomText}`);
//   }

//   return (
//     <main>
//       <h1>List of Memes</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="meme-container">
//           <div className="meme-image-container">
//             <img src={meme.randomImage} alt="Meme" /> {/* Display the random image from the state */}
//           </div>
//           <div className="meme-text-container">
//             <input
//               type="text"
//               placeholder="Top text"
//               className="form--input"
//               value={meme.topText}
//               onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Bottom text"
//               className="form--input"
//               value={meme.bottomText}
//               onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
//             />
//           </div>
//         </div>
//         <button type="submit">Create Meme</button>

//         {/* Display the combined text */}
//         <h1>{memeText}</h1>
//       </form>
//     </main>
//   );
// }

// export default MemeGen;


