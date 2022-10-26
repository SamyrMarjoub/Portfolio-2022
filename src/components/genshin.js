import React from "react";
import genshin1 from '../images/genshin1.png'
import genshin2 from '../images/genshin2.png'
import genshin3 from '../images/genshin3.png'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/zoom"
import { A11y, Autoplay, Navigation, Zoom } from "swiper";

function openpage() {
    let a = document.querySelector('.allowedb')
    a.target = '_blank'
    a.href = 'https://samyrmarjoub.github.io/Genshin-Impact-home-page/'
}

function Genshin() {

    return (
        <>
            <div className="headerf">
                <div className="headercontainerf">
                    <Link to='/'><span className="spanheaderprincipal">HOME</span></Link>
                </div>
            </div>
            <div className="maincpjts">
                <div className="childmaindiv">
                    <div className="spancontainer">
                        <span className="titlechild">Genshin Impact Home Page</span>
                    </div>
                    <div className="containerimgc">
                        <div className="imgdivc">
                            <Swiper navigation={true} a11y={true} autoplay={true} zoom={true} modules={[Navigation, Autoplay, A11y, Zoom]} className="mySwiper">
                                <SwiperSlide><img src={genshin1} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={genshin2} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={genshin3} className='imgslider' alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="parahraphcontainer">
                        <div className="flexparagraph">
                            <p>Este projeto foi bem interressante, eu recriei a página inicial do jogo Genshin Impact. Tive bastante desafios no CSS da página, a página esta identica, mas claro, tem algumas diferenças se comparar bem.
                            </p>
                            <span className="spanut">Tecnologias utilizadas: <span className="react">ReactJS</span>, <span className="html">HTML</span>, <span className="css">CSS</span> .</span> <br />
                            <div className="btngrpf">
                                <a className="linksite" href="https://samyrmarjoub.github.io/Genshin-Impact-home-page/" target="_blank" rel="noreferrer">
                                    <button className="button-74 btnp allowedb" onSubmit={openpage}>
                                        Checar Site!
                                    </button>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Genshin