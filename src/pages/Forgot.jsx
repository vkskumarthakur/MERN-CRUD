import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="login-container bg-white p-5 rounded-md min-w-[430px]">
      <span className="text-center block py-3 text-2xl font-medium text-blue-950">
        Forgot Password
      </span>
      <form>
        <div className="flex flex-col gap-3">
          <div className="phone">
            <input
              type="text"
              placeholder="Enter Phone"
              className="border-blue-950  outline-none p-1 border-[1px] rounded-md w-full"
              required
            />
          </div>
          <div className="submit-btn">
            <button className="bg-green-900 text-white rounded-md p-2 w-full">
              Send OTP
            </button>
          </div>
          <div className="mt-3">
            <label className="text-center block">
              Back to &nbsp;
              <Link to="/login">
                <span className="text-blue-950 underline cursor-pointer">
                  Login
                </span>
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
