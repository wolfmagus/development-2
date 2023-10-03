import React, { useState } from "react";
import memesData from "../memesData.js";
import MemeGen from "./MemeGen";

function ImageSelect(props) {
  const [image, setImage] = useState({
    randomImage: "",
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomImageUrl = memesArray[randomNumber].url;
    setImage({ randomImage: randomImageUrl });
  }

  return (
    <main>
      <button className="form--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      
      {image.randomImage && <img src={image.randomImage} className="meme--image" />}
      {/* Pass the 'image' state as props to the MemeGen component */}
      <MemeGen image={image} />
    </main>
  );
}

export default ImageSelect;


// import React, { useState } from "react";
// import memesData from "../memesData.js";
// import MemeGen from "./MemeGen";

// function ImageSelect(props) {
// //   const [image, setMeme] = useState({
// //     topText: "",
// //     bottomText: "",
// //     randomImage: "",
// //   });

// // const [image, setImage] = useState("")
// const [image, setImage] = useState({
//     randomImage: "",
//   });
// //For meme object
// //   function getMemeImage() {
// //     const memesArray = memesData.data.memes;
// //     const randomNumber = Math.floor(Math.random() * memesArray.length);
// //     setImage({ ...image, randomImage: memesArray[randomNumber].url });
// //   }
// //for meme url
// function getMemeImage() {
//     const memesArray = memesData.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArray.length);
//     const randomImageUrl = memesArray[randomNumber].url;
//     setImage(randomImageUrl);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     //console.log(image.topText, image.bottomText);
//     console.log(image);
//   }

//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <div className="form">
//           <input
//             type="text"
//             placeholder="Top text"
//             className="form--input"
//             value={image.topText}
//             onChange={(e) => setImage({ ...image, topText: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Bottom text"
//             className="form--input"
//             value={image.bottomText}
//             onChange={(e) => setImage({ ...image, bottomText: e.target.value })}
//           />
//           <button className="form--button" onClick={getMemeImage}>
//             Get a new meme image 🖼
//           </button>
//         </div>
//       </form>
//       <img src={image.randomImage} className="meme--image" />
//       {/* Pass the 'image' state as props to the MemeGen component */}
//       <MemeGen image={image} />
//     </main>
//   );
// }

// export default ImageSelect;


