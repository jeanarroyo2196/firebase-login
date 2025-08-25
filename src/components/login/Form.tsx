import { useState } from "react";
import firebaseApp from "../../config/firebaseConfig.ts";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "../shared/alert/Alert.tsx";

const auth = getAuth(firebaseApp);

export const Form = () => {
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");

  const authentication = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (register) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        setMessage("There is no account associated with this email address");
      }
    }
  };

  return (
    <main className="w-full flex h-screen">
      <div className="relative flex-1 hidden lg:flex">
        <div className="absolute inset-0 bg-[url('src/assets/images/wave.svg')] bg-cover bg-no-repeat"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-3">
        <div className="w-full max-w-2xl mb-12">
          <Alert
            message={message}
            register={register}
            setRegister={setRegister}
            setMessage={setMessage}
          />
        </div>
        <div className="w-full max-w-2xl p-10 rounded-lg shadow border bg-gray-800 border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-6">
            {register ? "Create an account" : "Sign in to your account"}
          </h1>
          <form className="space-y-6" onSubmit={authentication}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full mt-2 p-3 bg-gray-700 text-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full mt-2 p-3 bg-gray-700 text-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 px-5 py-2.5 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer"
            >
              {register ? "Create account" : "Sign in"}
            </button>
            <p className="text-center text-white">
              {register ? "Already have an account?" : "Don't have an account?"}{" "}
              <a
                className="font-medium text-indigo-600 hover:text-idnigo-500 cursor-pointer"
                onClick={() => setRegister(!register)}
              >
                {register ? "Log in" : "Sign up"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};
