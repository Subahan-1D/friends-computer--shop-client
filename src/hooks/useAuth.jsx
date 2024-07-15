import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

// custom hook
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
