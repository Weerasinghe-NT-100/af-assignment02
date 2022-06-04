import io from "socket.io-client";
import { useState } from "react";
import Chatpage from "./Chat";
import "./Chat.css";

const socket = io.connect("http://localhost:3001");

function ChatWithGroup() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="">
    <div>
 <div >
 
 </div>
 <br />


            <br />
          
 

    <div>
        <center>
            <div>
            {!showChat ? (
                <div className="chat-window" >

                <h3>Join chat  </h3>
                <input
              class="form-control" id="floatingInput"  
                    type="text"
                    placeholder="your name "
                    onChange={(event) => {
                    setUsername(event.target.value);
                    }}
                /><br/>
                <input
                 class="form-control" id="floatingInput"  
                    type="text"
                    placeholder="Group ID"
                    onChange={(event) => {
                    setRoom(event.target.value);
                    }}
                /><br/>
                <button   className="btn btn-blue " onClick={joinRoom}>Join A chatGroup</button>
                </div>
            ) : (
                <Chatpage socket={socket} username={username} room={room} />
            )}
            </div>
        </center>
    </div>
    </div>
    </div>
  );



}

export default ChatWithGroup;

