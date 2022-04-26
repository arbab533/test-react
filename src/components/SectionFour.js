import React from 'react'
import teamImgOne from '../assets/Bitmap1.png'
import teamImgTwo from '../assets/girl.png'
import teamImgThree from '../assets/employer.png'

const Card = ({img, title, desc}) => {
    return (
        <div className="inner">
        <div className='top'>
            <img src={img} />
        </div>
        <div className='desc'>
            <h3>{title} </h3>
            <p>{desc}</p>
            <a href='/'>LEARN MORE &#8594;	</a>
        </div>
    </div>
    )
}

const SectionFour = () => {
  return (
    <div className='container-fluid section_four_container'>
      <div className='container section_four_row'>
          <div className='sec_three_head'>
                <h2>Millions of <b>businesses</b> <span style={{color: '#8DD8D3'}}>Worldwide</span> choose E-REC</h2>
          </div>
          <div className='team_row'>
             
             <Card img={teamImgOne} title="Candidate" desc="Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing"/>
             <Card img={teamImgTwo} title="Recruiter" desc="Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing"/>
             <Card img={teamImgThree} title="Employer" desc="Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing"/>
            
          </div>
      </div>
    </div>
  )
}

export default SectionFour
