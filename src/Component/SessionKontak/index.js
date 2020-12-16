import React from 'react';
import PhotoDonasi from '../../assets/img/belajar.jpg';
import './index.css';
import Wa from  '../../assets/img/WA.svg';
import Ig from '../../assets/img/IG.svg';
import Bni from '../../assets/img/logobni.png';


const SessionKontak = () => {
    return (
        <div className='session-kontak'>
            <div className='container'>
                <div className='row'>
                    <div className='photo-donasi'> 
                        {/* <img src={PhotoDonasi} alt="" className='image'/> */}
                        <div className="video-frame">
                        <iframe src="https://www.youtube.com/embed/_F62EOZ9hqw" frameborder="0" allowFullscreen></iframe>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content-item'>
                            <h1 className='headline'>Jika Ingin Berdonasi Bisa Melalui Rekening kami</h1>
                            <p className='subline'><img src={Bni} alt="" className='icon-bni'/>A/n Nilawati : 0761855473</p>
                        
                            <h1 className='headline'>Untuk Info Lebih Lanjut Hubungi kami</h1>
                            <p className='subline'><img src={Wa} alt="" className='icon'/><a href="https://web.whatsapp.com/send?phone=6281365169339&text=Hai, saya ingin bertanya tentang bagaimana caranya berdonasi di PAJ" target="_blank">+62813-6516-9339</a></p>
                            <p className='subline'><img src={Ig} alt="" className='icon'/><a href="https://www.instagram.com/panduabdijaya_paj/">panduabdijaya_paj</a></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default SessionKontak;