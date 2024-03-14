// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.js'
// import IssueProvider from './context/IssueProvider.js'
// import UserProvider from './context/UserProvider.js'
// //import './css/styles.css'


// ReactDOM.render(
//   <BrowserRouter>
//       <IssueProvider>
//       <UserProvider>
//         <App/>
//       </UserProvider>
//       </IssueProvider>
//   </BrowserRouter>, 
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import IssueProvider from './context/IssueProvider.js';
import UserProvider from './context/UserProvider.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <IssueProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </IssueProvider>
  </BrowserRouter>
);
