import React from 'react';
import Logo from '../../assets/img/logo.png'
import './index.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='row'>
                <div className='logo'> 
                <img src={Logo} alt=""/>
            </div>
            <ul className='menu'> 
                <li className='menu-item'> 
                    <a href="#">Kegiatan</a> 
                </li>
                <li className='menu-item'>
                    <a href="#">Anggota</a> 
                </li>
                <li className='menu-item'>
                    <a href="#">Tentang</a>
                </li>
                <li className='menu-item'>
                    <a href="#">Kontak</a>
                </li>
            </ul>
                </div>
            </div> 
        </div>
    ) 
}


export default Navbar;