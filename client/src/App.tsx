import useRoutesHook from "./hooks/useRoutes.hook";
import M from "materialize-css";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/authContext";
import { useAuth } from "./hooks/auth.hook";
import useAppSelector from "./hooks/reduxHooks/useAppSelector.hook";

function App() {
  const user = useAppSelector(state => state.user);
  const routes = useRoutesHook(user.role);
  const { login, logout } = useAuth();
  const token = useAppSelector(state => state.token.accessToken);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!token && <NavBar />}
      {routes}
      {!!token && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;
