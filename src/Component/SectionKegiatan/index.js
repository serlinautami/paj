import React, { Component } from "react";
import Slider from "react-slick";
import classnames from 'classnames';
import './index.css'
import panahKanan from '../../assets/img/icon-panah-kanan.svg'
import panahKiri from '../../assets/img/icon-panah-kiri.svg'
import photo from '../../assets/img/belajar.jpg';
import photo1 from '../../assets/img/1.jpg';
import photo2 from '../../assets/img/2.jpg';
import photo3 from '../../assets/img/3.jpg';
import photo4 from '../../assets/img/4.jpg';
import photo5 from '../../assets/img/5.jpg';
import photo6 from '../../assets/img/6.jpg';
import photo7 from '../../assets/img/7.jpg';
import photo8 from '../../assets/img/8.jpg';
import photo9 from '../../assets/img/9.jpg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }


const NextArrow = ({ className, style, onClick, position }) => {
    const arrowClass = classnames(className, "arrow-btn")
    return (
        <div className={arrowClass} style={style} onClick={onClick}>
            <img src={position === 'next' ? panahKanan : panahKiri}  alt=""/>
        </div>
    )
}
  

const SectionKegiatan = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-kegiatan">
        <div className="container">
            <div className="row">
                <div className="section-header">
                    <h2 className="section-headline">Kegiatan</h2>
                    <p className="section-subline">Beberapa kegiatan yang kami lakukan</p>
                </div>
                <div className="section-body">
                <Slider 
                    dots
                    infinite
                    speed={500}
                    slidesToScroll={1}
                    slidesToShow={4}
                    arrows
                    nextArrow={<NextArrow position="next" />}
                    prevArrow={<NextArrow />}
                >
                    <div className="section-slider-item">
                        <img src={photo} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo1} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo2} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo3} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo4} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo5} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo6} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo7} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo8} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="section-slider-item">
                        <img src={photo9} alt="" style={{ width: '100%' }} />
                    </div>
                </Slider>
                </div>
            </div>
        </div>
      </div>
    );
}

export default SectionKegiatan;