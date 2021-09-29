import axios from "axios";
import { setError , loading , register , login , loginFail } from "../Redux/actions/authAction";
const headers = {
  "Content-Type": "application/json",
};

export function loginRequest(body, dispatch, history, setshow) {
  dispatch(loading());
  axios
    .post("http://localhost:5000/api/v1/auth/login", body, headers)
    .then((res) => {
      dispatch(login(res.data));
      history.push("/");
    })
    .catch((error) => {
      dispatch(loginFail());
      dispatch(setError(error.response));
      setshow(true);
    });
}

export function SignUpRequest(body, dispatch , history) {
  dispatch(loading());
  axios
    .post("http://localhost:5000/api/v1/auth/register", body, headers)
    .then((res) => {
      dispatch(register(res.data));
      history.push("/account/login");
    })
    .catch((error) => {
      dispatch(setError(error.response));
    });
}
