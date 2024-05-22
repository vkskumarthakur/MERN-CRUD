import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="signup-container bg-white p-5 rounded-md"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <span className="text-center block py-3 text-2xl font-medium text-blue-950">
        User Sign Up
      </span>
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row items-center justify-start gap-2">
            <div className="name rounded-sm">
              <input
                type="text"
                placeholder="Name"
                className="border-blue-950  outline-none p-1 border-[1px] rounded-md"
                required
              />
            </div>
            <div className="phone">
              <input
                type="text"
                placeholder="Phone"
                className="border-blue-950  outline-none p-1 border-[1px] rounded-md"
                required
              />
            </div>
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              className="border-blue-950  outline-none p-1 border-[1px] rounded-md w-full"
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              className="border-blue-950  outline-none p-1 border-[1px] rounded-md w-full"
              required
            />
          </div>
          <div className="confirm-password">
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-blue-950  outline-none p-1 border-[1px] rounded-md w-full"
              required
            />
          </div>
          <div className="submit-btn">
            <button className="bg-green-900 text-white rounded-md p-2 w-full">
              Sign Up
            </button>
          </div>
          <div>
            <Link to="/forgotpassword">
              <label className="text-center block underline text-black cursor-pointer">
                Forgot Password?
              </label>
            </Link>
          </div>
          <div className="mt-3">
            <label className="text-center block">
              Already have an account? &nbsp;
              <Link to="/">
                <span className="text-blue-950 underline cursor-pointer">
                  Sign In
                </span>
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
