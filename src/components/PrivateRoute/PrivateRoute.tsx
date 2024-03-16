import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

import { auth } from "../../services/firebase";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [userState] = useAuthState(auth);
//   const { user } = useUser(userState?.uid ?? "");

  if (!userState) {
    return (
      <Navigate
        to={"/signin"}
        //   state={{ pathname, ...state }}
        replace
      ></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
