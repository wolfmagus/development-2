import React, { useContext} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="app">
      { token && <Navbar logout={ logout }/>}
      <Routes>
        <Route 
          path="/" 
          element={token ? <navigate to="/profile" /> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
          token={token}
        />
        <Route 
          path="/public"
          element={<Public />}
          token={token}
        />
      </Routes>
    </div>
  )
}

// import React, { useContext } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
// import Navbar from './components/Navbar.js'
// import Auth from './components/Auth.js'
// import Profile from './components/Profile.js'
// import Public from './components/Public.js'
// import ProtectedRoute from './components/ProtectedRoute'
// import { UserContext } from './context/UserProvider.js'

// export default function App(){
//   const { token, logout } = useContext(UserContext)
//   return (
//     <div className="app">
//       { token && <Navbar logout={ logout }/>}
//       <Switch>
//         <Route 
//           exact path="/" 
//           render={()=> token ? <Redirect to="/profile"/> : <Auth />}
//         />
//         <ProtectedRoute 
//           path="/profile"
//           component={Profile}
//           redirectTo='/'
//           token={token}
//         />
//         <ProtectedRoute 
//           path="/public"
//           component={Public}
//           redirectTo='/'
//           token={token}
//         />
//       </Switch>
//     </div>
//   )
// }



