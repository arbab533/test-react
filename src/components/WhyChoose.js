import React from 'react'
import whyChooseImg from '../assets/img.png'

const WhyChoose = () => {
  return (
    <div className='container-fluid why_choose_container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-5 left my-auto'>
                    <h4 className='sub_head_why_choose'>WHY CHOOSE E-rec</h4>
                    <h2>Dashboard <b>Features <span style={{color: '#4DC1BA'}}>And</span></b> Functions</h2>
                    <img src={whyChooseImg} />
                </div>
                <div className='col-md-7 right gx-5 my-auto'>
                    <table className='why_table'>
                        <tr>
                            <th>Feature</th>
                            <th>Function</th>
                            <th>Business Benefits</th>
                        </tr>
                        <tr>
                            <td>Red User Icon</td>
                            <td>Indicates candidate did not meet minimum criteria</td>
                            <td>Time is saved by instantly filtering out candidates that are suitable for other roles than the one they have applied for.</td>
                        </tr>
                        <tr>
                            <td>Orange User Icon</td>
                            <td>Indicates candidate achieved a score of 80% but less than 95%</td>
                            <td>Creates a 2nd tier of candidates that act as redundant candidates if the 95% plus candidates are unavailable or have found other roles.</td>
                        </tr>
                        <tr>
                            <td>Green Icon</td>
                            <td>Indicates candidate has met all criteria and surpassed expectations to achieve scores within the top 5% of candidates.</td>
                            <td>Provides a significant strategic hiring advantage to identify highly  talented candidates as they become known in the wild in real time to contact and secure for interview.</td>
                        </tr>
                        <tr>
                            <td>Filter by Distance</td>
                            <td>Filters the data by distance</td>
                            <td>For roles that are critical and require someone on call and close by the (PPoW) Primary Place of Work, the employer or recruiter can select primary candidates that meet the criteria for the role instantly.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose
