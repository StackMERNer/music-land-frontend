import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import useUser from "./useUser";

const useUserInfo = () => {
  const [userState] = useAuthState(auth);
  const { user } = useUser(userState?.uid ?? "");

  return { _id: user?._id };
};

export default useUserInfo;
