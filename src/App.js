import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./theme";
import { StateContext } from "./StateProvider";
import PrivateRoutes from "./hoc/PrivateRoutes";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import "./App.css";


function App() {

  const { toggle } = useContext(StateContext);
  const [theme, settheme] = useState("light");
  
  const themeToggler = () => {
    theme === "light" && toggle ? settheme("dark") : settheme("light");
  };

  return (
    <Router>
      <ThemeProvider
        theme={theme === "light" && toggle ? lightTheme : darkTheme}
      >
        <GlobalStyle />
        <Switch>
          <Route path={"/account"} component={Auth} />
          <PrivateRoutes path={"/"} component={Main} />
          <Route path="*" component={NoMatch}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );  
}

export default App;
