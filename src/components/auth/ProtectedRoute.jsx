import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SampleContext from '../../contexts/SampleContext';

const ProtectedRoute = ({ children }) => {
  const { islogin } = useContext(SampleContext);
  const location = useLocation();

  // If not logged in, redirect to login page
  if (!islogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
