import React from "react";
import { Route,Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";
const PrivateRoutes =({component:Component,...rest}) =>{
    return (
        <div
          {...rest}
          render={(props) =>
            isAuthenticated()
              ? (
                <Component {...props} />
              )
              : (
                <Navigate
                  to={{
                    pathname: "/signin",
                    state: { from: props.location },
                  }}
                />
              )}
        />
      );
};
export default PrivateRoutes;