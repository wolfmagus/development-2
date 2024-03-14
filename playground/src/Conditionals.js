import React, { useState } from "react";

const ConditionalRenderingDemo = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  console.log(
    `Toggle 1: ${toggle1} \nToggle 2: ${toggle2} \nToggle 3: ${toggle3}`
  );

  return (
    <div>
      <h1>Conditionally Rendering in React</h1>

      {/*   &&   */}
      <div className="container">
        <button onClick={() => setToggle1((prev) => !prev)}>Toggle</button>
        {toggle1 && <h1>The 'And' operator ( && )</h1>}
      </div>

      {/*   ? :   */}
      <div className="container">
        <button onClick={() => setToggle2((prev) => !prev)}>Toggle</button>

        <>
          <h1>Ternary Operator</h1>
          <p>( ? this : that )</p>
        </>

        <form>
          <input />
          <input />
        </form>
      </div>

      {/*   ||   */}
      <div className="container">
        <button onClick={() => setToggle3((prev) => !prev)}>Toggle</button>
        <h1>The Or Operator ( || ) </h1>
      </div>
    </div>
  );
};

export default ConditionalRenderingDemo;
