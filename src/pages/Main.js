import React, { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Rightbar from "../component/Rightbar";
import PrivateRoutes from "../hoc/PrivateRoutes";
import { route  } from "../routes/route";
import { Switch } from "react-router";

function Main() {
  const [show, setshow] = useState(false);
  return (
    <div>
      <Header setshow={setshow} show={show} />
      <div className="container">
        <Sidebar show={show} />
        <Switch>
          {route &&
            route.map(({ component, path }) => (
              <PrivateRoutes path={path} component={component} exact />
            ))}
        </Switch>
        <Rightbar />
      </div>
    </div>
  );
}

export default Main;
