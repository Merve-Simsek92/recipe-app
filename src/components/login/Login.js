
import React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";

// const signUpValidationSchema = Yup.object({
//     username: Yup.string()
//       .required("Display name is required")
//       .min(2, "Too short")
//       .max(15, "Must be 15 char or less"),
//       password: Yup.string()
//       .required("No password provided")
//       .min(8, "Password is too short - should be 8 chars minimum")
//       .matches(/\d+/, "Password must have a number")
//       .matches(/[a-z]+/, "Password must have a lowercase")
//       .matches(/[A-Z]+/, "Password must have a uppercase")
//       .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char")
// });

const Login = () => {
    

  return (
      <div>
          <h1>Get Turkish Recipes</h1>
          <div className="container">
              <form>
                  <input type="text" placeholder="username"></input><br></br>
                  <input type="password" placeholder="password"></input><br></br>
                  <button type="submit">LOGIN</button>
              </form>

          </div>
      </div>
        
  )
         
  
  }
export default Login;