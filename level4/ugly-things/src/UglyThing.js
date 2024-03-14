import React from 'react';
import { UglyThingsContextConsumer } from './UglyContext';

function UglyThing(props) {
  const { deleteThing, toggleEdit, editTitle, editDescription, editImgUrl, handleChange, editThing } =
    React.useContext(UglyThingsContextConsumer);

  return (
    <>
      {props.item.isEditing === false ? (
        <>
          <h2>{props.item.title}</h2>
          <img style={{ width: '200px', height: '200px' }} src={props.item.imgUrl} alt={props.item.title} />
          <p>{props.item.description}</p>
          <button onClick={() => deleteThing(props.item._id)}>Delete</button>
          <button onClick={() => toggleEdit(props.item._id)}>Edit</button>
        </>
      ) : (
        <div>
          <form
            onSubmit={(e) => {
              editThing(e, props.item._id);
              toggleEdit();
            }}
            className="thing-form"
          >
            <input
              type="text"
              name="editTitle"
              placeholder="Title"
              value={editTitle}
              onChange={handleChange}
            />
            <input
              type="text"
              name="editDescription"
              placeholder="Description"
              value={editDescription}
              onChange={handleChange}
            />
            <input
              type="text"
              name="editImgUrl"
              placeholder="URL"
              value={editImgUrl}
              onChange={handleChange}
            />
            <button>Submit Edits</button>
          </form>
        </div>
      )}
    </>
  );
}

export default UglyThing;
