import React, { useState,useContext, useRef } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { GlobeType } from "../../Types/Type";
import { useNavigate } from "react-router-dom";
import MiniLogin from "./MinLogin";


// type Check = {
//   username: string;
//   password: string;
// };

const Login = () => {
  const [left, setLeft] = useState<boolean>(false);
  const toggleLeft = () => {
    setLeft(!left);
  };

  //   Context
  const {user, setUser} = useContext(GlobalContext) as GlobeType

//  UseNavigate
  const location = useNavigate()


// Login

const submitForm = (e:any) => { 
    e.preventDefault();
    if (
      user.userName === firstName.current.value && 
      user.password === password.current.value &&
      user.userName &&
      user.password !== ""
    ) {
      localStorage.setItem("User", JSON.stringify(user));
      location("/dashboard");
      window.location.reload();
    }
    else if (name.current.value == "" || pass.current.value == "") {
      alert("Enter username and password");
    } else {
      alert("The username or password is incorrect");
    }
  };

//   Sign In

  const checkForm = (e : any) => {
    e.preventDefault();
    setUser({
        userName: firstName.current.value,
        password: password.current.value,
      });
    
  };

  
const name = useRef<any>()
const pass = useRef<any>()

const firstName = useRef<any>()
const password = useRef<any>()

  return (
    <>
      <section id="registration">
        <div className="register-card">
          <div className={left ? "item-owr1 owr tr-0" : "item-owr1 owr"}>
            <h4>Welcome Back!</h4>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={toggleLeft}>Logİn</button>
          </div>
          <div className={!left ? "item-owr2 owr tr-0" : "item-owr2 owr"}>
            <h4>Hello, Friend!</h4>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={toggleLeft}>Sign Up</button>
          </div>
          <div className={left ? "owerlay" : "owerlay right"}></div>
          <div className="sign-in form">
            <div className={!left ? "item" : "item item-hid2"}>
              <h4>Login</h4>
              <form onSubmit={submitForm}>
                <input type="text" placeholder="User Name" ref={name} />
                <input type="password" placeholder="Password" ref={pass} />
                <p>Forgot password?</p>
                <button>LOGİN</button>
              </form>
            </div>
          </div>
          <div className="log-in form">
            <div className={left ? "item" : "item item-hid1"}>
              <h4>
                Create <br /> Account
              </h4>
              <form onSubmit={checkForm}>
                <input type="text" placeholder="Name" ref={firstName}/>
                <input type="text" placeholder="Email" disabled />
                <input type="password" placeholder="Password" ref={password} />
                <button onClick={toggleLeft}>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <MiniLogin/>
    </>
  );
};

export default Login;
