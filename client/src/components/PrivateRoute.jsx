import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userIsLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
export default PrivateRoute;
