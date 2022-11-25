import { arrayUnion, doc, setDoc, writeBatch } from "firebase/firestore";
import { db } from "..";

export const sendMessages = {
  send: (fromUid: string, toUid: string, body: string, chatId: string) => {
    setDoc(
      doc(db, "/chats/" + chatId),
      {
        unreadMessages: {
          [toUid]: true,
        },
        messages: arrayUnion({
          to: toUid,
          from: fromUid,
          body,
        }),
      },
      {
        merge: true,
      }
    );
  },
  markAsRead: (uid: string, chatId: string) => {
    setDoc(doc(db, "/chats/" + chatId), {
        unreadMessages:{
            [uid]: false
        }
    },{
        merge:true
    });
  },
};
