import React, { Fragment } from "react";
import "./section2.css";

export default function Section2(){
    return(
        <Fragment>
            <div className="section2-container row m-0 justify-content-center">
                <div className="section2-box">
                    <div className="section2-bg-div">
                        <div className="section2-intro">
                            <h1><strong>Art spreads its wings wider!</strong></h1>
                            {/* <h1>Art spreads its wings wider!</h1> */}
                            <p className="mt-4">
                                We aim at uplifting artists by helping them create the NFTs for their 
                                music. We intend to provide them with royalties and recognition that 
                                they rightfully deserve but don't get.
                            </p>
                        </div>
                        <div className="green-card mt-5">
                            <h3><strong>Create and Sell your Music as an NFT</strong></h3>
                            <p className="mt-4">
                                We aim at uplifting artists by helping them create NFTs for their 
                                music. We intend to provide them with royalties and recognition that 
                                they rightfully deserve but don't get.
                            </p>
                            <p className="mb-4">
                                We aim to uplift artists by enabling them to create NFTs of their 
                                music.
                            </p>
                        </div>
                        <div className="song-info-preview">
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}