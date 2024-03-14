# Status Codes 
    # 200 - Successful Request 
    # 201 - Successful Insert/Update
    # 401 - Unauthorized
    # 404 - Not Found
    # 500 - Server Error

    # https://http.cat

# Connecting the front-end to the back-end

    # Folder Structure
    # Proxy


# Is the proxy what allows the frontend of a react app to access the data on the server side?

Yes, that's correct! In a typical setup for a React app, especially during development, a proxy is often used to enable communication between the frontend (React app) and the backend (server).

During development, your React app may run on a different port (e.g., `http://localhost:3000`), while your server may run on a separate port (e.g., `http://localhost:5000`). This can lead to issues related to cross-origin resource sharing (CORS), as browsers often block requests from one domain to another for security reasons.

To overcome this, a proxy can be set up to forward certain requests from the frontend to the backend. This is typically done using a development server like `react-scripts` or a custom webpack configuration. The proxy configuration allows requests to be redirected to the backend server, making it appear as though they are coming from the same domain during development.

For example, if your React app makes a request to `http://localhost:3000/api/data`, the proxy might redirect it to `http://localhost:5000/api/data`, where your server is listening.

This setup simplifies development by avoiding CORS issues and allows seamless communication between the frontend and backend. However, it's important to note that in a production environment, the frontend and backend are often served from the same domain, so CORS is not a concern. The proxy is primarily a development convenience.