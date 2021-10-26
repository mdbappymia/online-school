import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useRent from "../../hooks/useRent";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useRent();
  if (isLoading) {
    return (
      <div className="my-5 py-5 text-center">
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email === "mbm.21.02.16@gmail.com" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
