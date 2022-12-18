import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";

import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  SignInWithGooglePopUp,
  userDocument,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../utils/Firebase";

const defaultDisplayFields = {
  displayName: "",
  email: "",
  password: "",
};
const defaultLoginFields = {
  email2: "",
  password2: "",
};

function Auth() {
  const [formFields, setformFields] = useState(defaultDisplayFields);
  const { displayName, email, password } = formFields;

  const [loginFied, setloginFied] = useState(defaultLoginFields);
  const { email2, password2 } = loginFied;

  const resetFormField = () => {
    setformFields(defaultDisplayFields);
  };
  const resetFormField2 = () => {
    setloginFied(defaultLoginFields);
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  const inputChangeHandler2 = (event) => {
    const { name, value } = event.target;
    setloginFied({ ...loginFied, [name]: value });
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    return () => {};
  }, []);

  const signInWithGoogle = async () => {
    const { user } = await SignInWithGooglePopUp();
    // console.log(response);
    // setCurrentUser(user);
  };

  const handleSubmisson = async (event) => {
    event.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(responce);

      await userDocument(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already in Use");
      }
      console.log("error encounter while creating user", error.message);
    }
  };

  const handleSubmisson2 = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(email2, password2);
      // setCurrentUser(user);
      resetFormField2(defaultLoginFields);
      // console.log(responce);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <style jsx="true">{`
        h1 {
          font-weight: bold;
          margin: 0;
        }

        h2 {
          text-align: center;
        }

        p {
          font-size: 14px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }

        span {
          font-size: 12px;
        }

        a {
          // color: #333;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }

        .main-btn {
          border-radius: 20px;
          border: 1px solid #153a5b;
          background-color: #153a5b;
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
        }

        button:active {
          transform: scale(0.95);
        }
        .main-btn:hover {
          border-color: 2px solid #153a5b;
          background-color: white;
          color: #153a5b;
        }
        button:focus {
          outline: none;
        }

        button.ghost {
          background-color: transparent;
          border-color: #ffffff;
          color: white;
        }
        button.ghost:hover {
          background-color: white;
          color: #153a5b;
          border-color: #153a5b 1px solid;
        }

        form {
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 63px;
          height: 100%;
          text-align: center;
        }

        input {
          /* background-color: #eee; */
          border-radius: 0.3rem;
          border: 0.01rem solid rgb(204, 204, 204);
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
        }

        .container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          position: relative;
          overflow: hidden;
          width: 900px;
          /* max-width: 100%; */
          min-height: 600px;
          max-height: 600px;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }

        @keyframes show {
          0%,
          49.99% {
            opacity: 0;
            z-index: 1;
          }

          50%,
          100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s ease-in-out;
          z-index: 100;
        }

        .container.right-panel-active .overlay-container {
          transform: translateX(-100%);
        }

        .overlay {
          background: #153a5b;

          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 0;
          color: #ffffff;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        .social-container {
          margin: 20px 0;
        }

        .social-container a {
          border: 1px solid #dddddd;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          height: 40px;
          width: 40px;
        }

        .signintbtn {
          background-color: rgb(99, 93, 255);
          border: none;
        }

        .signintbtn:hover {
          background-color: #483dff;
        }
        .mian-2:hover {
          background-color: white;
          border: 1px solid #153a5b;
          color: #153a5b;
        }
        .inputs:focus {
          outline: 0px;
          border-color: #153a5b;
          box-shadow: rgb(0 0 0 / 8%) 0px 0.1rem 0.1rem inset,
            rgb(21, 58, 91 / 60%) 0px 0px 0.8rem;
        }
        .inputs:hover {
          border-color: rgb(21, 58, 91);
        }
      `}</style>
      <Flex
        //  h="92vh"
        my={"2rem"}
        align={"center"}
        justify="center"
        // minH={"700px"}
      >
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmisson}>
              <Heading size={"lg"}>Create Account</Heading>

              <span>or use your email for registration</span>
              <input
                className="inputs"
                type="text"
                placeholder="Display Name"
                value={displayName}
                required
                onChange={inputChangeHandler}
                name="displayName"
              />

              <input
                className="inputs"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={inputChangeHandler}
                name="email"
              />
              <input
                className="inputs"
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={inputChangeHandler}
                name="password"
              />
              {/* <button className="signintbtn">Sign Up</button> */}
              <Button
                mt="20px"
                px="45px"
                py="12px"
                bg={"#153a5b"}
                color="white"
                w="140px"
                className="mian-2"
                type="submit"
              >
                {" "}
                Sign Up
              </Button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmisson2}>
              <Heading size={"lg"}>Sign in</Heading>
              <div className="social-container">
                <Button
                  bg={"#153A5B"}
                  color="white"
                  onClick={signInWithGoogle}
                  leftIcon={<FaGoogle fill="White" />}
                >
                  Continue With Google
                </Button>
              </div>
              <span>or use your account</span>

              <input
                className="inputs"
                type="email"
                placeholder="Email"
                required
                name="email2"
                onChange={inputChangeHandler2}
                value={email2}
              />

              <input
                className="inputs"
                type="password"
                placeholder="Password"
                required
                name="password2"
                onChange={inputChangeHandler2}
                value={password2}
              />
              <Text>Forgot your password?</Text>
              {/* <button className="signintbtn">Sign In</button> */}
              <Button
                className="main-btn"
                px="45px"
                py="12px"
                // colorScheme={"guru"}
                w="140px"
                type="submit"
              >
                {" "}
                Sign In
              </Button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div
                className="overlay-panel overlay-left"
                style={{ backgroundColor: "#153A5B" }}
              >
                <Heading>The GURU</Heading>
                <Text py={"20px"}>Your Guru!</Text>
                {/* <button className="ghost" id="signIn">Sign In</button> */}
                <Button
                  variant={"none"}
                  color="white"
                  borderColor={"white"}
                  border="1px"
                  className="ghost"
                  id="signIn"
                  px="45px"
                  py="12px"
                  colorScheme={"guru"}
                  w="140px"
                >
                  {" "}
                  Sign In
                </Button>
              </div>
              <div
                className="overlay-panel overlay-right"
                style={{ backgroundColor: "#153A5B" }}
              >
                <Heading mb={"1rem"}>New Customer?</Heading>
                <Text>Create an account with us and you'll be able to:</Text>
                <Flex
                  direction={"column"}
                  // border="1px"
                  width={"80%"}
                  justify="left"
                  align={"self-start"}
                >
                  <li>Check out faster</li>
                  <li>Access your order history</li>
                  <li>Give Aousome Review</li>
                </Flex>
                {/* <button style={{backgroundColor: "rgb(99, 93, 255)" }} className="ghost" id="signUp">Sign Up</button> */}
                <Button
                  mt={"5rem"}
                  variant={"none"}
                  color="white"
                  borderColor={"white"}
                  border="1px"
                  className="ghost"
                  id="signUp"
                  px="45px"
                  py="12px"
                  colorScheme={"guru"}
                  w="140px"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default Auth;
