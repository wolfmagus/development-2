import React from 'react';
//import React, {useEffect } from 'react';
import { UglyThingsContextConsumer } from './UglyContext';
import UglyThing from './UglyThing';

function UglyThingsList() {

  //const { getThings } = React.useContext(UglyThingsContextConsumer);
  // useEffect(() => {
  //   getThings();
  // }, []);
  return (
    <div>
      <UglyThingsContextConsumer>
        {({ uglyThingsList }) => {
          const list = uglyThingsList
            ? uglyThingsList.map((item, index) => <UglyThing key={index} item={item} />)
            : null;
          return list;
        }}
      </UglyThingsContextConsumer>
    </div>
  );
}

export default UglyThingsList;
