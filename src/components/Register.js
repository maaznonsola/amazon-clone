import React, {useState} from "react";
import "./Register.css";
import {Link, useNavigate} from "react-router-dom";
import {auth, user} from "../firebase/firebase";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        navigate("/");
        return result.user.updateProfile({
          displayName: name,
        });
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="register__container">
        <h1>Register Your Account</h1>

        <form>
          <h5>Profile Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="register__signUpButton"
            onClick={register}
          >
            Register
          </button>
        </form>

        <p>
          By registering you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Link to="/login">
          <button className="register__loginButton">
            Already have an account? Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
