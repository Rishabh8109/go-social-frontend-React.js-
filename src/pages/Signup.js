import React, { useState, useRef } from "react";
import AuthProvider from "../component/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUpRequest } from "../apiRequests/authRequests";

function Signup() {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conformpasswordRef = useRef();
  const [error, seterror] = useState({});
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const Signuphandler = (e) => {
    e.preventDefault();

    const username = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const conformPassword = conformpasswordRef.current.value;

    formRef.current.reset();

    // if password length is less than 6
    if (parseInt(password.length, 10) !== 6 && password !== conformPassword) {
      seterror(
        { length: "password length must be 6" },
        { match: "passwor does not match" }
      );
    } else if (password !== conformPassword) {
      seterror({ match: "passwor does not match" });
    } else if (parseInt(password.length, 10) !== 6) {
      seterror({ length: "password length must be 6" });
    }

    // // request body
    const body = { username, email, password, conformPassword };

    // request comming from apiRequest/authRequest
    SignUpRequest(body, dispatch, history);
  };

  return (
    <div className="login">
      <section className="login-card">
        <h4>Sign up in with</h4>
        <div className="auth-provider">
          <AuthProvider />
        </div>
        <p className="divider">or</p>
        <div className="login-card-body">
          <form onSubmit={Signuphandler} ref={formRef}>
            <div className="form-control">
              <label>Username</label>
              <br />
              <input type="text" placeholder="Username" ref={nameRef} />
            </div>
            <div className="form-control">
              <label>Email</label>
              <br />
              <input
                type="email"
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
                style={{
                  border: error.length && "1px solid #ff4343",
                  "::placeholder": { color: error.length && "#ff4343" },
                }}
              />
              {error.length && <p className="error-text">{error.length}</p>}
            </div>
            <div className="form-control">
              <label>conform Password</label>
              <br />
              <input
                type="password"
                placeholder="Re-enter password"
                ref={conformpasswordRef}
                style={{ border: error.match && "1px solid red" }}
              />
              {error.match && <p className="error-text">{error.match}</p>}
            </div>
            <button type="submit">
              {isLoading ? "Loading...." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="login-card-footer">
          <p>
            Already have an account?
            <span>
              <Link to={"/account/login"}>Sign in</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Signup;
