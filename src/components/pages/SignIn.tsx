"use client";
import GoogleLogoIcon from "@/components/svgs/GoogleLogoIcon";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import EmailInput from "../reusables/EmailInput";
import { Link } from "react-router-dom";
import signInImg from "@/assets/house2.jpg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section>
      <div className="grid grid-cols-2 mx-auto mt-[8vh] w-[75%] gap-16 my-auto">
        <img
          src={signInImg}
          alt="hero image"
          width={20000000}
          height={20000000}
          className="h-full w-full object-cover"
        />
        <div className="pr-16 h-full mt-10">
          <div>
            <h1 className="font-medium text-3xl text-gray-800">
              Welcome to <span className="text-sky-800">Property Finder</span>
            </h1>
            <p className="text-sm text-gray-500">create an account</p>
          </div>
          <form className="mt-5">
            <div className="grid mt-4">
              <label className="text-xs text-gray-500" htmlFor="email">
                Email
              </label>

              <EmailInput />
            </div>
            <div className="grid mt-4">
              <label className="text-xs text-gray-500" htmlFor="password">
                Password
              </label>
              <div className="flex items-center font-medium outline-[1px] outline-gray-300 rounded-lg">
                <div className="py-1 px-2">
                  <LockKeyhole className="text-gray-400" size={17} />
                </div>
                <input
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="password"
                  className="w-full focus:outline-0 text-gray-600 text-[13px] py-[10px] px-2 border-none"
                />
                <button
                  className="py-[10px] px-2 cursor-pointer"
                  type="button"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? (
                    <Eye className="text-gray-400" size={17} />
                  ) : (
                    <EyeOff className="text-gray-400" size={17} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              // onClick={() => {
              // }}
              className="bg-sky-600 cursor-pointer mt-7 text-xs font-semibold transition-all rounded-lg hover:bg-sky-700 py-[12px] text-white w-full"
            >
              {isCreatingAccount ? "...Loading" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
