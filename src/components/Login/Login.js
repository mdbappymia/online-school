import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useRent from "../../hooks/useRent";

const Login = () => {
  const { signInUsingGoogle, setError, error, setIsLoading } = useRent();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="text-center my-5">
      <p className="text-danger">{error}</p>
      <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
    </div>
  );
};

export default Login;
