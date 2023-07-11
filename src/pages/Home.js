import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("New Room Created Successfully");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room ID & username are required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="logoArea">
          <img
            className="homePageLogo"
            src="/codexshareLogo.png"
            alt="CodeXShare Logo"
          />
          <div className="logoNameArea">
            <h1>CodeXShare</h1>
            <span className="caption">Code. Collaborate. Build</span>
          </div>
        </div>

        <h4 className="mainLabel">Enter Joining Room Details</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Your Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            Don't have an Invite? &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              Create New Room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
