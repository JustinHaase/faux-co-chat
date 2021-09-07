import { useState } from "react";
import React from "react";
import ReactDOM from 'react-dom';
import { ChatEngine } from "react-chat-engine";
import { ChatList } from "react-chat-engine";
// import { ChatSettings } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ChatFeed from "./components/ChatFeed";
// import ChatSettings from ".ChatSettings";
import Calendar from "./components/Calendar";
import DigitalResources from "./components/DigitalResources";

import "./App.css";
// import { CaretDownFilled } from "@ant-design/icons";
// import { BoldOutlined } from "@ant-design/icons";

const App = () => {
  const [signUp, setSignUp] = useState("");

  const logOutHandler = () => {
    localStorage.setItem("username", "");
    window.location.reload(false);
  };

  if (!localStorage.getItem("username") && signUp) {
    return <SignUpForm signUp={signUp} setSignUp={setSignUp} />;
  } else if (!localStorage.getItem("username")) {
    return <LoginForm signUp={signUp} setSignUp={setSignUp} />;
  }

  //***digital resource form and card creation--->//
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // const newCard = document.createElement('div');
  // const newText = document.createTextNode('');
  // newCard.appendChild(newText);
  // const position = document.getElementsById("resource")[0];
  // position.appendChild(newCard);
  const formWindowOpen = () => {
    openForm();
  }
  const formWindowClose = () => {
    closeForm();
  }
  const formCreateCard = (event) => {
    event.preventDefault();
    createCard();
  }
  
  // function card (props) {
  //   const nameEl = React.useRef(null);
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     alert(nameEl.current.value);
  //   };

  function createCard() {
    const element = React.createElement('div', {
      className: 'card'
  }, ['Hello!'])
  ReactDOM.render(element, document.getElementById('list'));
  // const position = document.getElementsById('list')[0];
  // position.appendChild('card');
  }


  //<---digital resource form and card creation***//


  return (
    <div className= "chatApp">
      <ChatEngine
        height="100vh"
        projectID="f20f804d-3fd0-4fb4-9e55-302dc7da0f8d"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        // renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        renderChatList={(chatAppProps) => <Calendar {...chatAppProps} />}
        renderChatSettings={(chatAppProps) => <DigitalResources {...chatAppProps}
        open={formWindowOpen}
        close={formWindowClose}
        create={formCreateCard}
        />}
      />
      <div style={{ contentAlign: "center" }}>
        <button
          type="submit"
          onClick={logOutHandler}
          style={{
            width: "80px",
            height: "50px",
            background: "lightblue",
            borderRadius: "15%",
            fontWeight: "bolder",
            margin: "10px",
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}


export default App;
