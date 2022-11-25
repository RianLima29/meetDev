import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "..";

export const userLocation = {
  setUserLocation: (
    uid: string | undefined,
    locData: { latitude: number; longitude: number },
    err: () => any
  ) => {
    setDoc(
      doc(db, "/usersData/", uid ?? "..."),
      {
        latitude: locData.latitude,
        longitude: locData.longitude,
      },
      { merge: true }
    ).catch(() => {
      err();
      toast.error("Erro de rede");
    });
  },
};
