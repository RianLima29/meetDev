import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "..";

export interface IUserProfile {
  name: string;
  age: string;
  userGender: "M" | "F";
  preferenceGender: "M" | "F" | "MF";
}

export const userProfile = {
  setProfile: (
    uid: string | undefined,
    data: IUserProfile,
    photoUrl?: string
  ) => {
    setDoc(
      doc(db, "/usersData/", uid ?? "..."),
      {
        profile: {
          name: data.name,
          age: data.age,
          userGender: data.userGender,
          preferenceGender: data.preferenceGender,
          photoUrl,
          uid,
          likes: [],
          likedBy: [],
          unlikes: [],
          unlikedBy: [],
          chatsWith: {},
        },
      },
      {
        merge: true,
      }
    )
      .then(() => {
        toast.success("Perfil atualizado com sucesso!");
      })
      .catch(() => {
        toast.error("O perfil não pôde ser atualizado");
      });
  },
};
