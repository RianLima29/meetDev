import styled from "styled-components";
import { COLOR_ACCENT, COLOR_DARK, COLOR_TEXT } from "../../config";
import { IoSendSharp } from 'react-icons/io5'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 60px);
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100% - 100px);
  padding: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SendMessageForm = styled.form`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
`;

export const SendMessageInput = styled.input`
  color: ${COLOR_TEXT};
  width: calc(100% - 80px);
  z-index: 10;
  outline: none;
  border: none;
  border-radius: 20px 0px 0 20px;
  padding: 10px;
  border: 2px solid ${COLOR_ACCENT};
  background-color: transparent;
  border-right: 0px solid ${COLOR_ACCENT};
`;

export const SendMessageButton = styled.button`

    color: ${COLOR_ACCENT};
    width: 80px;
    height: 100%;
    border: 2px solid ${COLOR_ACCENT};
    border-left: 1px solid ${COLOR_ACCENT};
    border-radius: 1px 20px 20px 0;
    transition: .5;
    cursor: pointer;
    padding: 5px;
    background-color: transparent;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg{
        font-size: 20px;
    }

    &:hover{
        color: ${COLOR_TEXT};
    }

`

interface MessageProps {
    fromUser:boolean
}

export const Message = styled.div<MessageProps>`

    border: 2px solid ${COLOR_ACCENT};
    background-color: ${COLOR_DARK};
    min-width: 100px;
    width: fit-content;
    height: fit-content;
    z-index: 1000;
    align-self: ${props => props.fromUser ? 'flex-end' : 'start'};
    border-radius: 10px;
    color: ${COLOR_TEXT};
    max-width: 49%;
    padding: 8px;
    word-wrap: break-word;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

`

export const MessageText = styled.p`

    font-weight: 300;
    font-size: 14px;

`

export const MessageInfoWrapper = styled.div`
   
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: fit-content;
`

export const SeenText = styled.p`
    color: #ccc;
    align-self: flex-end;
    margin-top: 5px;
    font-size: 10px;

`