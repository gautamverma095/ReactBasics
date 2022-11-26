import { useEffect, useState } from "react";
import createConnection from "./User";
import { users } from "./User";
import Contacts from "./Contact";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [subscribedTo, setSubscribedTo] = useState(users[0]); // { id: 1, name: Aman  }

  useEffect(() => {
    let connection = createConnection(subscribedTo);
    connection.listen((newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => {
      connection.unsubscribe();
      setMessages([]);
    };
  }, [subscribedTo]);

  return (
    <div>
      <Contacts
        users={users}
        active={subscribedTo}
        onChange={(user) => setSubscribedTo(user)}
      />
      {messages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default ChatApp;
