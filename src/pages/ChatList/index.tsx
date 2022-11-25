import { collection, doc, query, where } from "firebase/firestore";
import React from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import ChatItem from "../../components/ChatItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { db } from "../../firebase";
import { UserType } from "../../firebase/types/userTypes";
import * as C from "./styles";

export default function ChatList() {
  const userId = localStorage.getItem("user_id") ?? "...";
  const [userData] = useDocumentData(doc(db, "/usersData/", userId));
  const [matchs, loading] = useCollectionData(
    query(
      collection(db, "/usersData"),
      where("profile.matchedWith", "array-contains", userId)
    )
  );


  console.log(matchs);
  const chatItems = matchs?.map((user, index) => (
    <ChatItem
      redirectTo={'/chat/'+(user as UserType).profile.chatsWith[userId].chatId}
      photoUrl={(user as UserType).profile.photoUrl}
      age={(user as UserType).profile.age}
      profileName={(user as UserType).profile.name}
    />
  ));

  return (
    <C.Container>
      <Header title="Chat" />
      <C.MainContainer>
        {loading && <C.NoMatchs>Carregando...</C.NoMatchs>}
        {matchs?.length == 0 && (
          <C.NoMatchs>
            Não há matches ainda. Interaja com mais cartas!
          </C.NoMatchs>
        )}
        {matchs && chatItems}
      </C.MainContainer>
      <Footer />
    </C.Container>
  );
}
