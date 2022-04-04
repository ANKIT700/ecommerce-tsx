import React, { useState } from "react";
import { FunctionComponent } from "react";
import "../../styles/login/login.styles.css";
import logo from "../../img/logo1.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface IUser {
  userName: string;
  password: string;
  showPassword: boolean;
}

const Login: FunctionComponent = () => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    localStorage.setItem('userName', loginData.userName)
    localStorage.setItem('password', loginData.password)

    // let path = `newPath`;
    navigate(path);
  };
  const [loginData, setLoginData] = useState<IUser>({
    userName: "",
    password: "",
    showPassword: false,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    // console.log(e.target.value)
  };
  const showPasswordHandler = () => {
    setLoginData({ ...loginData, showPassword: !loginData.showPassword });
  };
  

  return (
    <div className="d-flex login-main ">
      <div
        className="mr-auto p-2 w-50 left-section"
        style={{ backgroundImage: `url(${logo})`, backgroundSize: "100% 100%" }}
      ></div>
      <div className="p-2 w-50 my-auto">
        <form className="shadow-lg p-3 mb-5 bg-secondary rounded text-white mx-auto  w-50">
          <h3>Log In</h3>
          <div className="form-group mt-3">
            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
            <input
              name="userName"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={loginData.userName}
              onChange={onChangeHandler}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>

          <div className="input-group mt-3">
            <input
              name="password"
              type={loginData.showPassword ? "text" : "password"}
              className="form-control rounded"
              id="exampleInputPassword1"
              placeholder="Password"
              value={loginData.password}
              onChange={onChangeHandler}
            />
            <span>
            <FontAwesomeIcon
              icon={loginData.showPassword ?faEye: faEyeSlash}
              style={{
                fontSize: 20,
                color: "grey",
                marginLeft: 50,
                position: "absolute",
                right: 4,
                top: 8,
                zIndex:99999
              }}
              onClick={()=>showPasswordHandler()}
            />
            </span>
           
          </div>

         
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={() => routeChange("/dashboard")}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
