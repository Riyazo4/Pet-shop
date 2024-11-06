import React, { useState } from "react";
import logo from "../../assets/images/amber-kipp-75715CVEJhI-unsplash.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { isAuthenticated } from "../../auth";

import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;
  const {user, token} = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const redirectUser = () => {

    if (redirectToReferrer ) {  // Fixed typo here
      if(user && user.role ===true){
        console.log(user);
        
        return <Navigate to="/admin" />;
      } else{
        console.log(user);
        return <Navigate to="/" />;
      }
   }


   
  };

  const loginUser = (user) => {
    return fetch(`http://localhost:8000/api/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setValues({
            ...values,
            error: "Something went wrong. Please try again.",
            loading: false,
          });
          return;
        }
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            loading: false,
          });
        } else {
          // Save JWT to localStorage
          localStorage.setItem("jwt", JSON.stringify(data));  // Ensure you're saving the entire data if it contains JWT
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome aboard! Your login was successful.",
            confirmButtonText: "OK",
          }).then(() => {
            setValues({
              ...values,
              redirectToReferrer: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setValues({
          ...values,
          error: "Request failed. Please try again later.",
          loading: false,
        });
      });
  };
  

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    loginUser({ email, password });
  };

  return (
   
      <>
        {redirectUser()}
        <section className="min-h-fit flex items-center justify-center mt-12">
          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl items-center">
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
              <p className="text-xs mt-4 text-[#002D74]">
                If you are already a member, easily log in
              </p>
    
              <form className="flex flex-col gap-4">
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  value={email}
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange("password")}
                    value={password}
                  />
                </div>
    
                <button
                  type="submit"
                  onClick={clickSubmit}
                  className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                >
                  Login
                </button>
              </form>
    
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
    
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                {/* SVG code */}
                Login with Google
              </button>
    
              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <Link to="#">Forgot your password?</Link>
              </div>
    
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don’t have an account?</p>
                <Link to="/signup">
                  <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                    Register
                  </button>
                </Link>
              </div>
            </div>
    
            <div className="md:block hidden w-1/2">
              <img className="rounded-2xl" src={logo} alt="Login" />
            </div>
          </div>
        </section>
      </>
    );
    
  
};

export default Login;
