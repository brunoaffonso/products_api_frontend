import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);

  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ location }} replace />;
  }

  return children;
}

export default RequireAuth;
