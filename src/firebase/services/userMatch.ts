import { arrayUnion, doc, DocumentData, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "..";
import { UserType } from "../types/userTypes";

export const userMatch = {
  like: (userUid: string, remoteUid: string, remoteUser?:DocumentData) => {
    let matchConditional = !!(remoteUser as UserType).profile.likes.includes(userUid)
    if(matchConditional){
        toast.success('Você tem um novo match!')
        setDoc(
            doc(db, "/usersData/", userUid),
            {
              profile: {
                likes: arrayUnion( remoteUid),
                matchedWith: arrayUnion(remoteUid)
              },
            },
            {
              merge: true,
            }
          );
          setDoc(
            doc(db, "/usersData/", remoteUid),
            {
              profile: {
                likedBy: arrayUnion(userUid),
                matchedWith: arrayUnion(userUid)
              },
            },
            {
              merge: true,
            }
          );
    }else{
        setDoc(
            doc(db, "/usersData/", userUid),
            {
              profile: {
                likes: arrayUnion( remoteUid),
              },
            },
            {
              merge: true,
            }
          );
          setDoc(
            doc(db, "/usersData/", remoteUid),
            {
              profile: {
                likedBy: arrayUnion(userUid),
              },
            },
            {
              merge: true,
            }
          );
    }
  },
  unlike: (userUid: string, remoteUid: string) => {
    setDoc(
      doc(db, "/usersData/", userUid),
      {
        profile: {
          unlikes: arrayUnion(remoteUid),
        },
      },
      {
        merge: true,
      }
    );
    setDoc(
      doc(db, "/usersData/", remoteUid),
      {
        profile: {
          unlikedBy: arrayUnion(userUid),
        },
      },
      {
        merge: true,
      }
    );
  },
};
