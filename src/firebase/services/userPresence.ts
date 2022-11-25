import { db } from "..";
import { doc, setDoc } from "firebase/firestore";

const userPresence = {
  setOnline: (uid?: string) => {
    let onlineReference = doc(db, `/usersData/`, uid ?? "...");
    setDoc(
      onlineReference,
      {
        online: true,
      },
      { merge: true }
    );
  },
  setOffline: (uid?: string) => {
    let onlineReference = doc(db, "/usersData/", uid ?? "...");
    setDoc(
      onlineReference,
      {
        online: false,
      },
      { merge: true }
    );
  },
};

export default userPresence;
