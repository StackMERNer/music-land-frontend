import { Button, Input } from "@material-tailwind/react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useLocation, useNavigate } from "react-router-dom";

import { FormEvent, useEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import useUser from "../../hooks/useUser";
import { auth } from "../../services/firebase";
import ResigterUserToDb from "./ResigterToDb";

export default function SignIn() {
  const [signInWithGoogle, , gLoading, gError] = useSignInWithGoogle(auth);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, , eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [userState] = useAuthState(auth);
  const from = state?.pathname || "/";
  const { user } = useUser(userState?.uid ?? "");

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true, state: { ...state } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (gError) {
    console.log(gError);
    return (
      <div className="text-white min-w-full text-center container mx-auto h-screen py-4">
        <p>Error: {gError.message}</p>
      </div>
    );
  }

  const handleSignInWithEmailAndPass = (e: FormEvent) => {
    e.preventDefault();
    toast(
      "Sign In with email and pass currently unavailable, try Google Sign In please!"
    );
    return;
    ;
    signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userState) {
    return <ResigterUserToDb gUser={userState} />;
  }

  return (
    <section
      className={` flex py-10 flex-col justify-center dark:bg-dark-bg-primary items-center container mx-auto`}
    >
      <div className="border border-gray-700 shadow-xl p-8 dark:bg-dark-card-primary text-white  sm:w-[400px] rounded w-[95vw] mx-auto">
        <form onSubmit={handleSignInWithEmailAndPass}>
          <h1 className="text-center text-3xl font-bold">Sign In</h1>
          <div className="my-6">
            <Input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[40px] text-[1rem]"
              required
              value={email}
              color="indigo"
              variant="outlined"
              label="Email"
              crossOrigin={""}
            />
          </div>
          <div className="my-6">
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[40px] text-[1rem] "
              color="indigo"
              required
              variant="outlined"
              label="Password"
              crossOrigin={""}
            />
          </div>
          {eError && (
            <div className="bg-red-100 p-3 text-red-400">{eError.message}</div>
          )}

          <Button
            loading={eLoading}
            type="submit"
            className="w-full dark:bg-dark-btn-primary dark:text-[black] bg-c-primary text-[10px] py-4 my-6 bg-blue-700"
          >
            Sign In
          </Button>
        </form>
        {/* <div>
          <h1>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-c-primary underline dark:text-white ml-1"
            >
              Create one
            </Link>
          </h1>
        </div> */}
        <div className="text-center py-4">Or</div>
        <div className="flex flex-col gap-3">
          <Button
            loading={gLoading}
            onClick={handleSignInWithGoogle}
            className="text-center w-full border-c-primary dark:border-dark-btn-primary felx justify-center"
            variant="outlined"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <FcGoogle size={24} className="mb-[2px]"></FcGoogle>{" "}
              <p>Continue With Google</p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
