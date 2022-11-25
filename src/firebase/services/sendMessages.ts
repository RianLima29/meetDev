import { arrayUnion, doc, setDoc } from "firebase/firestore";
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
          id: Math.random()
        }),
      },
      {
        merge: true,
      }
    );
  },
  markAsRead: (uid: string, chatId: string) => {
    setDoc(
      doc(db, "/chats/" + chatId),
      {
        unreadMessages: {
          [uid]: false,
        },
      },
      {
        merge: true,
      }
    );
  },
};
