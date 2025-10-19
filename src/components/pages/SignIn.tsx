"use client";
import GoogleLogoIcon from "@/components/svgs/GoogleLogoIcon";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import EmailInput from "../reusables/EmailInput";
import { Link, useNavigate } from "react-router-dom";
import signInImg from "@/assets/house2.jpg";
import { useAuth, useSignIn } from "@clerk/clerk-react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });

        const token = await getToken();
        localStorage.setItem("JWT", JSON.stringify(token));
        navigate("/");
      } else {
        console.log("Sign in status:", result.status);
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Failed to sign in");
      console.error("Sign in error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-[8vh] w-full max-w-[70%] lg:max-w-[75%] gap-8 lg:gap-16 my-auto px-4 sm:px-0">
        <img
          src={signInImg}
          alt="hero image"
          width={20000000}
          height={20000000}
          className="hidden lg:block h-full w-full object-cover"
        />
        <div className="w-full lg:pr-16 h-full mt-4 lg:mt-10">
          <div>
            <h1 className="font-medium text-2xl sm:text-3xl text-gray-800">
              Welcome to <span className="text-sky-800">Property Finder</span>
            </h1>
            <p className="text-sm text-gray-500">create an account</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="grid mt-4">
              <label className="text-xs text-gray-500" htmlFor="email">
                Email
              </label>

              <EmailInput email={email} setEmail={setEmail} />
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
                  required
                  id="password"
                  minLength={4}
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
              type="submit"
              disabled={loading}
              className="bg-sky-600 cursor-pointer mt-7 text-xs font-semibold transition-all rounded-lg hover:bg-sky-700 py-[12px] text-white w-full"
            >
              {loading ? "...Loading" : "Sign Up"}
            </button>
          </form>
          {error && (
            <div className="p-3 text-sm text-red-700 mt-5 bg-red-100 rounded-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignIn;
