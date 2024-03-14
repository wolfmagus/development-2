import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
  const [state, setState] = useState({
    title: '',
    description: '',
    imgUrl: '',
    editTitle: '',
    editDescription: '',
    editImgUrl: '',
    uglyThingsList: [],
  });

  useEffect(() => {
    getThings();
  }, []);

  const getThings = () => {
    axios
      .get('https://api.vschool.io/roymaegus/thing')
      .then((res) =>
        setState({
          uglyThingsList: res.data.map((item) => ({ ...item, isEditing: false })),
        })
      )
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://api.vschool.io/roymaegus/thing', {
        title: state.title,
        description: state.description,
        imgUrl: state.imgUrl,
      })
      .then((res) => getThings())
      .catch((err) => console.log(err));
  };

  const deleteThing = (id) => {
    console.log('Delete is running');
    axios
      .delete(`https://api.vschool.io/roymaegus/thing/${id}`)
      .then((res) => getThings())
      .catch((err) => console.log(err));
  };

  const editThing = (e, id) => {
    e.preventDefault();
    axios
      .put(`https://api.vschool.io/roymaegus/thing/${id}`, {
        title: state.editTitle,
        description: state.editDescription,
        imgUrl: state.editImgUrl,
      })
      .then((res) => getThings())
      .catch((err) => console.log(err));
  };

  // const deleteThing = async (id) => {
  //   try {
  //     console.log('Delete is running');
  //     await axios.delete(`https://api.vschool.io/roymaegus/thing/${id}`);
  //     await getThings(); // Wait for getThings to complete before moving on
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  // const editThing = async (e, id) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`https://api.vschool.io/roymaegus/thing/${id}`, {
  //       title: state.editTitle,
  //       description: state.editDescription,
  //       imgUrl: state.editImgUrl,
  //     });
  //     await getThings(); // Wait for getThings to complete before moving on
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  

  const toggleEdit = (id) => {
    console.log('toggleEdit is reached');
    let newUglyThings = state.uglyThingsList.map((uglyThing) =>
      uglyThing._id === id ? { ...uglyThing, isEditing: !uglyThing.isEditing } : uglyThing
    );
    setState((prevState) => ({ ...prevState, uglyThingsList: newUglyThings }));
  };

  return (
    <UglyThingsContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        deleteThing,
        editThing,
        toggleEdit,
        getThings
      }}
    >
      {props.children}
    </UglyThingsContext.Provider>
  );
}
;
export { UglyThingsContextProvider, UglyThingsContext as UglyThingsContextConsumer };


