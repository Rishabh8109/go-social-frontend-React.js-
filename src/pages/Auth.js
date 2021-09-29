import React from 'react';
import '../styles/auth.css';
import { Route , Switch , useRouteMatch} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Toggle from '../component/Toggle';

function Auth() {
    const match = useRouteMatch();
    return (
        <div className="authentication">
           <header>
             <Toggle />
           </header>
            <Switch>
              <Route path={`${match.path}/Login`} component={Login} exact />
              <Route path={`${match.path}/create_account`} component={Signup} />
            </Switch>
        </div>
    )
}

export default Auth;
