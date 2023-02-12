import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";
import Button from "../../Layout/Button/Button";
import musicLogo from "../../../assets/music_icon.svg";

export default function HeroSection() {
	return (
		<Fragment>
			<div className="hero-container">
				<div className="hero-box">
					<div className="row justify-content-center hero-row">
						{/* INTRO CARD */}
						<div className="intro-card glass_effect glass_effect_border">
							<span className="intro-text">
								<div className="row justify-content-center">
									<div className="col-lg-5 col-md-10">Become a part of the Revolution</div>
								</div>
							</span>
						</div>

						{/* INTRO TO THE BRAND */}
						<div className="brand-intro">
							<h2>FeelGood</h2>
							<p className="mt-3">
								We aim at uplifting artists by helping them create the NFTs of their music. We intend to provide them with the royalties and the recognition that they so rightfully deserve but don't get.
							</p>

							<div className="row mt-5">
								<div className="col-lg-8 col-md-10 col-12">
									<div className="row">
										<div className="col-lg-4 col-md-5 col-sm-5 col-6">
											<Link to={"/library"}>
												<Button>Library</Button>
											</Link>
										</div>
										<div className="col-lg-4 col-md-5 col-sm-5 col-6 ml-sm-1">
											<Link to={"/create"}>
												<Button>Create</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Music Card Component */}
						<div className="music-card">
							<span className="music-card-text">
								<div className="row">
									<div className="col-lg-10">Music with a new shade!</div>
								</div>
							</span>
							<img src={musicLogo} alt="music icon" />
						</div>

						{/*ABOUT THE ORG*/}
						<div className="about-us">
							<p>
								FeelGood is a dApp for musicians to create NFTs of their music. These NFTs can then be traded and each time an NFT gets traded, the musician will get 5% of the trade
								as royalty!
							</p>
							<p>It doesn't matter if you're a bathroom singer, growing YouTube/Instagram star, or a famous musician. Anyone can create NFTs of their music!</p>
							<p>
								FeelGood is a platform to trade individual NFTs of songs. NFTs from artists can be looked at as stocks in the market. Just as buying stocks of companies that people
								believe to perform good in the future can result in massive profits, similarly, the value of these NFTs can skyrocket if that artist grows to be successful over time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
