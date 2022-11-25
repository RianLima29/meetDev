export type Chat = {
  messages: Message[];
  participants: string[];
};

export type Message = {
  from: string;
  to: string;
  seen: boolean;
  body: string;
  id: number
};
