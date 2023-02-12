import React from "react";
import "./MessageDemo.css";
import ChatDemo1 from "../../../assets/Group333.svg";
import ChatDemo2 from "../../../assets/Group334.svg";
import Asset1 from "../../../assets/section4Asset1.png";
const MessageDemo = () => {
	return (
		<div className="message-demo-container">
			<div className="message-demo-box">
				{/* <!-- header --> */}
				<div className="message-demo-heading">
					<div>There's more to </div>
					<div>buying and selling NFTs
					</div>
				</div>
				<div>
					<img className="asset1-img" src={Asset1} alt="assets-mobile"></img>
				</div>
				{/* CHAT FEATURE PREVIEW */}
				<div className="chat-sample-layout">
					<div className="message-card-1 glass_effect glass_effect_border">
						<div className="message-card-1-text">
							<h1>Group Messages</h1>
							<p>Get to know which tracks are topping the charts and the hottest tracks from the genre you love.</p>
						</div>
						<div className="message-card-1-img">
							<img src={ChatDemo1} alt="chat-demo-1"></img>
						</div>
					</div>
					<div className="message-card-2 glass_effect glass_effect_border">
						<div className="message-card-2-text">
							<h1>Private Chat</h1>
							<p>Followers can dm their favourite artists with our Private Chat feature.</p>
						</div>
						<div className="message-card-2-img">
							<img src={ChatDemo2} alt="chat-demo-2"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MessageDemo;
