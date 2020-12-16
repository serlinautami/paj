import React from 'react';
import Ketua from '../../assets/img/Ellipse.png';
import './index.css';
import Serlina from '../../assets/img/serlina.jpg';
import Hengki from '../../assets/img/hengki.jpeg';
import Rian from '../../assets/img/rian.jpeg';
import Fakhi from '../../assets/img/fakhi.jpeg';
import Nila from '../../assets/img/nila.jpeg';

const Anggota = () => {
    return (
        <div className='anggota'>
            <div className='container'>
                <div className='row'> 
                    <div className='content'>
                        <h1 className='headline'>Anggota</h1>
                        <p className='subline'>Kami Team Inti PAJ</p>
                    </div>
                    <div className='memberlist'>
                        <div className='member-item'>
                            <img src={Rian} alt="" className='image'/>
                            <h4 className='title-judul'>N.Rian Setto Ali</h4>
                            <p className='name-anggota'>Ketua PAJ</p>
                        </div>
                        <div className='member-item'>
                            <img src={Hengki} alt="" className='image'/>
                            <h4 className='title-judul'>Hengki Mai Indri</h4>
                            <p className='name-anggota'>Wakil Ketua PAJ</p>
                        </div>
                        <div className='member-item'>
                            <img src={Ketua} alt="" className='image'/>
                            <h4 className='title-judul'>Nasrudin</h4>
                            <p className='name-anggota'>Seketaris PAJ</p>
                        </div>
                        <div className='member-item'>
                            <img src={Fakhi} alt="" className='image'/>
                            <h4 className='title-judul'>Fakhi</h4>
                            <p className='name-anggota'>Wakil Seketaris PAJ</p>
                        </div>
                        <div className='member-item'>
                            <img src={Nila} alt="" className='image'/>
                            <h4 className='title-judul'>Nilawati</h4>
                            <p className='name-anggota'>Bendahara PAJ</p>
                        </div>
                        <div className='member-item'>
                            <img src={Serlina} alt="" className='image'/>
                            <h4 className='title-judul'>Serlina Utami</h4>
                            <p className='name-anggota'>Pengembang Sistem PAJ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Anggota;


