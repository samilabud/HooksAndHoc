import React,{useState} from 'react';
import './uncontrolled.styles.css';

export const Uncontrolled = () =>{
  const [classContainerName,setClassContainerName] = useState("container");

  //Login uncontrolled
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();
  //Signup uncontrolled
  const signUpInputName = React.createRef();
  const signUpInputEmail = React.createRef();
  const signUpPassword = React.createRef();

  //Change forms
  const signUpButtonFade = (event) =>{
    event.preventDefault();
    setClassContainerName("right-panel-active container");
  };

  const signInButtonFade = (event) => {
    event.preventDefault();
    setClassContainerName("container");
  };
  //Auth
  const signUpButton = (event) =>{
    event.preventDefault();
    console.log(`Trying to login with Name:${signUpInputName.current.value} Email: ${signUpInputEmail.current.value} and Password: ${signUpPassword.current.value}`);
  };

  const signInButton = (event) => {
    event.preventDefault();
    console.log(`Trying to login with Email: ${inputEmail.current.value} and Password: ${inputPassword.current.value}`);
  };

  return (
    <div className="bodycontainer">
      <h2>Sign in/up Form - Uncontrolled</h2>
      <div className={classContainerName} id="container" >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>use your email for registration</span>
            <input type="text" placeholder="Name" ref={signUpInputName} />
            <input type="email" placeholder="Email" ref={signUpInputEmail}/>
            <input type="password" placeholder="Password" ref={signUpPassword} />
            <button onClick={signUpButton}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>use your account</span>
            <input type="email" placeholder="Email" ref={inputEmail}  />
            <input type="password" placeholder="Password" ref={inputPassword} />
            <button onClick={signInButton}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={signInButtonFade}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButtonFade}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Uncontrolled;