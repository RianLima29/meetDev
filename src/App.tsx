import React from "react";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import userPresence from "./firebase/services/userPresence";

export default function App() {
  let [alreadyAuthUser, loading, error] = useAuthState(auth);

  

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (alreadyAuthUser?.uid) {
      userPresence.setOnline(alreadyAuthUser.uid);
      dispatch(setUser(alreadyAuthUser));
      localStorage.setItem('user_id', alreadyAuthUser.uid);
    } else {
      dispatch(setUser(null));
    }
  }, [alreadyAuthUser]);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "hidden") {
      if (alreadyAuthUser?.uid) userPresence.setOffline(alreadyAuthUser.uid);
    }
    if (document.visibilityState == "visible") {
      if (alreadyAuthUser?.uid) userPresence.setOnline(alreadyAuthUser.uid);
    }
  });

  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  } else {
    return (!!alreadyAuthUser ? <PrivateRoutes /> : <PublicRoutes />);
  }
}
