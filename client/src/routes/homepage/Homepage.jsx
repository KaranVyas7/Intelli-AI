import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>IntelliAI</h1>
        <h2>Ask any question that you desire!</h2>
        <h3>
          An answer awaits from our extraordinary chatbot! He knows the answer to all! 
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: Can you really answer anything I ask you?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Of course I can!",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human 2: I don't believe you!",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Try me!",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          IntelliAI can be wrong. Check important info!
        </div>
      </div>
    </div>
  );
};

export default Homepage;