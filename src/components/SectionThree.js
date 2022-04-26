import React from 'react'
import dashboarImg from '../assets/dashboard-img.png'

const SectionThree = () => {
  return (
    <div className='container-fluid section_three_container'>
      <div className='row section_three_row'>
        <div className='col-md-6 gx-5'>
            <img src={dashboarImg} />
        </div>

        <div className='col-md-6 my-auto gx-5'>
            <h3 className='how_it_work_head'>How It’s Works: <b>The E-REC Dashboard</b> Feature & Function</h3>
            <p className='how_it_work_txt'>EREC dashboard that presents the employer or recruiter, real time engagement  information, data and metrics about the candidate and informs the user of recommended next steps to expedite the shortlisting process to move to interview.</p>
            <p className='how_it_work_txt'>The dashboard has several key differentiations from other recruitment platforms that  provide the user with a competitive advantage to identify the best possible candidate in a highly accurate and structured process.  </p>
            <a href='/' className='how_it_work_btn'>Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
