import React, { useState } from "react";
import memesData from "../memesData.js";
import SavedMemes from "./SavedMemes";

function MemeGen(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randomNumber]); // Update the 'meme' state with the selected meme object
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(meme);
    // Here you can use the 'meme' state to generate the meme.
    // For simplicity, I'll just show a console log with the selected meme object.
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            value={meme.topText}
            onChange={(e) =>
              setMeme((prevMeme) => ({ ...prevMeme, topText: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            value={meme.bottomText}
            onChange={(e) =>
              setMeme((prevMeme) => ({ ...prevMeme, bottomText: e.target.value }))
            }
          />
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </form>
      {/* Display the current meme's random image */}
      {meme.randomImage && (
        <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
      )}

      <SavedMemes meme={meme} />
    </main>
  );
}

export default MemeGen;



// import React from "react"
// import {useState} from "react"
// import memesData from "../memesData.js"
// import SavedMemes from "./SavedMemes"

// function MemeGen(props) {
//     // const [memeImage, setMemeImage] = useState("")//updates to whatever meme url is given by getMemeImage()
//     // const [topText, setTopText] = useState("") //Updates to whatever the user enters into the box
//     // const [bottomText, setBottomText] = useState("") //Updates to whatever the user enters into the box
    
//     const [meme, setMeme] = useState({
//         topText:"",
//         bottomText:"",
//         randomImage:""
//     })
    
//     // function getMemeImage() {
//     //     const memesArray = memesData.data.memes //Save meme array to memesArray variable
//     //     const randomNumber = Math.floor(Math.random() * memesArray.length)//Get random nuber based on meme array length(1-100)
//     //     setMemeImage(memesArray[randomNumber].url)//Run setMemeImage function pass in memesArray array with a random 
//     //                                                 //number as the index. Get the url of that particular meme
//     //                                                 //Set memeImage state to the url retrieved
//     // }
//     function getMemeImage() {
//         const memesArray = memesData.data.memes //Save meme array to memesArray variable
//         const randomNumber = Math.floor(Math.random() * memesArray.length)//Get random nuber based on meme array length(1-100)
//         setMeme(memesArray[randomNumber].url)//Run setMemeImage function pass in memesArray array with a random 
//                                                     //number as the index. Get the url of that particular meme
//                                                     //Set memeImage state to the url retrieved

        
//     }
// //Handle the submition of the random meme and the top/bottom input texts
//     function handleSubmit(e){
//        e.preventDefault()
//     //    const topText = topText
//     //    const bottomText = bottomText
//     //    console.log(topText, bottomText)
//        console.log(meme)
        
//     // Here you can use the topText and bottomText state values to generate the meme.
//     // You could use a third-party library or an API to generate the meme image with the text.
//     // For simplicity, I'll just show a console log with the text.
//     }
//     //Return two input boxes, a button, and a random meme to the screen.
//     return (
//         <main>
//             <form onSubmit={handleSubmit}>
//                 <div className="form">
//                     {/* Top input and properties */}
//                     <input 
//                         type="text"
//                         placeholder="Top text"
//                         className="form--input"
//                         value={meme.topText}
//                         onChange={(e) => setMeme((prevMeme) => ({ ...prevMeme, topText: e.target.value }))}

//                         />
//                         {/* Bottom input and properties */}
//                     <input 
//                         type="text"
//                         placeholder="Bottom text"
//                         className="form--input"
//                         value={meme.bottomText}
//                         onChange={(e) => setMeme((prevMeme) => ({ ...prevMeme, bottomText: e.target.value }))}

//                     />
//                     {/* Button to change memes */}
//                     <button 
//                         className="form--button"
//                         onClick={getMemeImage}
//                     >
//                         Get a new meme image 🖼
//                     </button>
//                 </div>
//             </form>
//             {/* Print the current meme that has been selected by memeImage function to the screen */}
//             <img src={meme.randomImage} className="meme--image" />

//             <SavedMemes  />
//         </main>
//     )
// }

// export default MemeGen

// import React, { useState } from "react";
// import memesData from "../memesData.js";
// import SavedMemes from "./SavedMemes";

// function MemeGen(props) {
//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: "",
//   });

//   function getMemeImage() {
//     const memesArray = memesData.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArray.length);
//     setMeme({ ...meme, randomImage: memesArray[randomNumber].url });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(meme.topText, meme.bottomText);
//     console.log(meme);
//   }

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <div className="form">
//           <input
//             type="text"
//             placeholder="Top text"
//             className="form--input"
//             value={meme.topText}
//             onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Bottom text"
//             className="form--input"
//             value={meme.bottomText}
//             onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
//           />
//           <button className="form--button" onClick={getMemeImage}>
//             Get a new meme image 🖼
//           </button>
//         </div>
//       </form>
//       <img src={meme.randomImage} className="meme--image" />
//       {/* Pass the 'meme' state as props to the SavedMemes component */}
//       <SavedMemes meme={meme} />
//     </main>
//   );
// }

// export default MemeGen;
