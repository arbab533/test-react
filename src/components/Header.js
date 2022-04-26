import React from 'react'
import logoImg from '../assets/logo.png'

const Header = () => {
  return (
    <>
        <div className='container-fluid header_con'>
            <div className='container header_row'>
                <div className='logo'>
                    <img src={logoImg} />
                </div>
                <div className='menu'>
                    <ul className='menu_ul'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
                <div className='btn_reigter_login'>
                    <ul className='register_btns'>
                        <li className='register_btn'><a href="/">Register</a></li>
                        <li className='login_btn'><a href="/">Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Header
