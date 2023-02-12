import React from 'react';
import './LogoAndHeadline.css'
import LogoSVG from '../../../assets/red_circle.svg'

const LogoAndHeadline = () => {
    return (
        <div className='abcd'>
            <div className='heading-logo'>
                Experience the world of music with us!
            </div>
            <div className='heading-logo-master-container'>
                <div className='grey-background'></div>
                <div className='heading-logo-container'>
                    <div className='heading-logo-2'>
                        <div >Go</div>
                        <div >Crazy</div>
                    </div>
                    <img className='image-logo' src={LogoSVG} alt="musicosmos logo"></img>
                    <div className='heading-logo-2'>
                        <div >With</div>
                        <div >Web3!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogoAndHeadline;