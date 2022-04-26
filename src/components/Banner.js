import React from 'react'
import bannerLogoImg from '../assets/logo-name-banner.png'
import videoImg from '../assets/video-banner.png'
import arrowImg from '../assets/Icon-feather-arrow-right.png'

const Banner = () => {
  return (
    <div className='container-fluid banner_con'>
        <div className='row banner_row'>
            <div className='col-md-4 my-auto'>
                <img src={bannerLogoImg} />
                <h2 className='main_banner_head'>Finding The Best Talent For Your Organization</h2>
                <a href='/' className='banner_btn'>
                    <p>Start your</p>
                    <img src={arrowImg} />
                    <p>journey</p>
                </a>
            </div>

            <div className='col-md-8'>
                <img src={videoImg} className="video_img"/> 
            </div>
        </div>
      
    </div>
  )
}

export default Banner
