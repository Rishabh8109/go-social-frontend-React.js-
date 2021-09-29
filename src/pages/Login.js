import React, { useRef , useContext } from "react";
import AuthProvider from "../component/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../component/Alert";
import { loginRequest } from "../apiRequests/authRequests";
import { StateContext } from "../StateProvider";

function Login() {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const errorState = useSelector((state) => state.error);
  const {show , setshow} = useContext(StateContext);

  function login(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // clear inputs
    formRef.current.reset();

    // // request body
    const body = { email, password };
    loginRequest(body, dispatch, history , setshow);
  }
  

  // set classname to the alert box
  function setClassName() {
    if(errorState.msg) {
      return "danger"
    }else if(authState.message) {
      return "success"
    }
  }

  // set message int the alert box 
  function setMessage() {
    if(errorState) return errorState.msg;
    if(authState) return authState.message
  }

  return (
    <div className="login">
        <Alert
          message={authState.message || errorState.msg}
          show={show}
          setshow = {setshow}
          classname={setClassName()}
        />
      
      <section className="login-card">
        <h4>Login in with</h4>
        <div className="auth-provider">
          <AuthProvider />
        </div>
        <p className="divider">or</p>
        <div className="login-card-body">
          <form onSubmit={login} ref={formRef}>
            <div className="form-control">
              <label>Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter email address"
                ref={emailRef}
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                ref={passwordRef}
              />
            </div>
            <button type="submit">Log in </button>
          </form>
        </div>
        <div className="login-card-footer">
          <p>
            Don't have an account?
            <span>
              <Link to={"/account/create_account"}>Sign up</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
