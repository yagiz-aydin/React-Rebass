import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Profile from "views/profile";
import AuthorizedRoute from "./Guards/AuthorizedRoute";
import UnauthRoute from "./Guards/UnauthRoute";
import { Provider as AuthProvider } from "context/AuthContext";
import Forbidden from "components/DefaultPages/Forbidden";
import NotFound from "components/DefaultPages/NotFound";
import SignIn from "views/SignIn";
import { PATH, PERMS } from "route/manager";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<Link to={PATH.PROFILE}>Go to Profile</Link>} />
          <Route
            path={PATH.PROFILE}
            element={
              <AuthorizedRoute perm={PERMS.PROFILE}>
                <Profile />
              </AuthorizedRoute>
            }
          />
          <Route
            path={PATH.LOGIN}
            element={
              <UnauthRoute>
                <SignIn />
              </UnauthRoute>
            }
          />
          <Route path={PATH["403"]} element={<Forbidden />} />
          <Route path={PATH["404"]} element={<NotFound />} />
          <Route path="*" element={<Navigate to={PATH["404"]} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
