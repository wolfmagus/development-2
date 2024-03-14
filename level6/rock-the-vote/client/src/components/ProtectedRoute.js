// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'

// export default function ProtectedRoute(props) {
//     const {path, redirectTo, component: C, token, ...rest } = props
//     return token ? 
//         <Route path={path} render={() => <C {...rest}/>}/> :
//         <Redirect to={redirectTo}/>
// }

import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ path, redirectTo, component: Component, token, ...rest }) {
    useEffect(() => {
        if (!token) {
            // Redirect if token is not present
            window.location.href = redirectTo;
        }
    }, [token, redirectTo]);

    // Render the route only if token is present
    return token ? <Route path={path} render={(props) => <Component {...props} {...rest} />} /> : null;
}
