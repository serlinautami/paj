import React from 'react';
import camp from '../../assets/img/camp.svg';
import './index.css';


const Banner = () => {
    return (
        <div className='banner'> 
            <div className='container'> 
                <div className='row'>
                    <div className='image'> 
                        <img src={camp} alt=""/>
                    </div>
                    <div className='content'>
                        <h1 className='headline'>PANDU ABDI JAYA</h1>
                        <p className='subline'>Rasa Perduli dan Saling Menolong Sesama Adalah Kunci Kedamaian Hidup</p>
                        <div>
                            <a href="#" className="button">
                                EXPLORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;