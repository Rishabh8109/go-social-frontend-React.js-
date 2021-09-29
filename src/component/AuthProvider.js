import React , {useRef} from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function AuthProvider() {
  return (
    <React.Fragment>
      <p>
        <span>
          <FcGoogle />
        </span>{" "}
        Google
      </p>
      <p>
        <span>
          <FaFacebookF />
        </span>{" "}
        Facebook
      </p>
    </React.Fragment>
  );
}

export default AuthProvider;
