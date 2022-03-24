import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserFun } from "../Redux/Slices/loginSlice";

const initialCred = {
  userName: "",
  password: "",
};

function Login() {
  const [cred, setCred] = useState({ ...initialCred });

  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(loginUserFun(cred));
    // dispatch(signupUserFun(cred));
  };

  return (
    <div className="grid">
      <form className="form login" onSubmit={(e) => loginUser(e)}>
        <div className="form__field">
          <input
            onChange={(e) => setCred({ ...cred, userName: e.target.value })}
            id="login__username"
            type="text"
            name="userName"
            className="form__input"
            placeholder="Username"
            required
          />
        </div>

        <div className="form__field">
          <input
            id="login__password"
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
            type="password"
            name="password"
            className="form__input"
            placeholder="Password"
            required
          />
        </div>

        <div className="form__field">
          <input onSubmit={() => loginUser()} type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
}

export default Login;
