import React from 'react'
import icon1Img from '../assets/icon-1.png'
import icon2Img from '../assets/icon-2.png'
import icon3Img from '../assets/icon-3.png'

const SectionTwo = () => {
  return (
    <div className='container-fluid section_2'>
        <div className='container'>
            <div className='row top'>
                <div className='col-md-6 my-auto'>
                    <h3 className='erec'>How EREC <b>Works Quickly</b> <span style={{color: '#8DD8D3'}}>&</span> Accurately </h3>
                </div>
                <div className='col-md-6 my-auto right'>
                    <p>Welcome to E-REC- Employment Real-Time Engagement Centre. Finding the top talent, the right job and the right fit for your organization has never been easier to do, until now!</p>
                </div>
            </div>
            <div className='row what_we_do'>
                <div className='col-md-4'>
                    <img src={icon1Img} />
                    <h3>What we do?</h3>
                    <p>E-rec brings you a selection of the top talent hours of posting the job using the unique services to bring the right candidate for the right job.</p>
                </div>

                <div className='col-md-4'>
                    <img src={icon2Img} />
                    <h3>What we do?</h3>
                    <p>Our specially designed platform solutions help you identify the right candidate in unprecedented timeframes. </p>
                </div>

                <div className='col-md-4'>
                    <img src={icon3Img} />
                    <h3>Why Erec?</h3>
                    <p>E-REC platform transforms the preselection environment and delivers high quality pre-screened applicants within 1 business day of the advert being posted – Guaranteed!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo
