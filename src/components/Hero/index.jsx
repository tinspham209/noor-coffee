import React from "react";
import "./style.css";
import { Button } from "../UI/Button";
import { FaPlayCircle } from "react-icons/fa";
import heroImg from "../../assets/img/img-home.jpg";
const Hero = () => {
	return (
		<div
			className="hero"
			style={{
				background: `url("${heroImg}") center center/cover no-repeat`,
			}}
		>
			<h1>NOOR</h1>
			<p>Coffee & Tea</p>
			<div className="hero__buttons">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					ABOUT US
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					WATCH VIDEO{" "}
					<span className="hero__icon">
						<FaPlayCircle />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default Hero;
