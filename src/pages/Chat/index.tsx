import React from "react";
import * as C from "./styles";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Message } from "../../firebase/types/chatTypes";
import { useForm } from "react-hook-form";
import { sendMessages } from "../../firebase/services/sendMessages";
import {yupResolver} from '@hookform/resolvers/yup'
import { IoSendSharp } from "react-icons/io5";
import * as yup from 'yup'

interface Form {
  message: string;
}

const schema = yup.object().shape({
  message: yup.string().required()
})

export default function Chat() {
  const params = useParams();
  const { register, handleSubmit } = useForm<Form>({
    resolver: yupResolver(schema)
  });
  const chatId = params.chatId ?? "...";
  const userId = localStorage.getItem("user_id") ?? "...";
  const [chatData] = useDocumentData(doc(db, "/chats/" + chatId));
  const [messages, setMessages] = React.useState<undefined | Message[]>(
    undefined
  );
  const [remoteUid, setRemoteUid] = React.useState<string>('')
  const formRef = React.useRef() as React.RefObject<HTMLFormElement>;

  React.useEffect(() => {
    if(!remoteUid && chatData?.participants){
      let id = chatData?.participants.filter((item: string)=>{
        return item != userId
      })
      setRemoteUid(id)
    }
    if (chatData?.messages) {
      console.log(chatData)
      setMessages(chatData?.messages);
      sendMessages.markAsRead(userId, chatId)
    }
  }, [chatData]);

  const onSubmit = (data: Form) => {
    console.log(chatData)
    sendMessages.send(userId, remoteUid ,data.message, chatId);
  };

  

  
  const content = messages?.map((message, index) => {
    let fromUser = message.from == userId ? true : false
    let unseenMessages = false
    if(chatData?.unreadMessages[remoteUid]){
      unseenMessages = true
    }

    return(
    <C.Message key={index} fromUser={fromUser}>
      <C.MessageText>{message.body}</C.MessageText>
      <C.MessageInfoWrapper>
        {unseenMessages ? <BiCheck/> : <BiCheckDouble />}
      </C.MessageInfoWrapper>
    </C.Message>
    )
  })
  
    



  return (
    <C.Container>
      <Header />
      <C.MessagesContainer>
       {content && content}
      </C.MessagesContainer>
      <C.SendMessageForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <C.SendMessageInput {...register("message")} />
        <C.SendMessageButton>
          <IoSendSharp />
        </C.SendMessageButton>
      </C.SendMessageForm>
    </C.Container>
  );
}