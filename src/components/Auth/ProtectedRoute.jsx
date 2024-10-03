// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element: Component }) => {
//     const user = localStorage.getItem("token");
//     return user ? <Component /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem("token");
  
  // If token exists, allow access to the component, otherwise redirect to login
  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
