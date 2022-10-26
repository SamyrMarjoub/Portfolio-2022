import React from "react";
import fallguys from '../images/fallguys1.png'
import fallguys2 from '../images/fallguys2.png'
import fallguys3 from '../images/fallguys3.png'
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
    a.href = 'https://samyrmarjoub.github.io/Fallguys/'
}

function Fallguys() {

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
                        <span className="titlechild">Fall Guys Home Page</span>
                    </div>
                    <div className="containerimgc">
                        <div className="imgdivc">
                            <Swiper navigation={true} a11y={true} autoplay={true} zoom={true} modules={[Navigation, Autoplay, A11y, Zoom]} className="mySwiper">
                                <SwiperSlide><img src={fallguys} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={fallguys2} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={fallguys3} className='imgslider' alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="parahraphcontainer">
                        <div className="flexparagraph">
                            <p>Outro projeto foi bem divertido de fazer, eu recriei a página inicial do jogo Fall Guys. Usei algumas propriedades CSS que nunca tinha usando antes, então valeu muito a pena pelo aprendizado. A página esta identica, mas claro, tem algumas diferenças se comparar bem.
                            </p>
                            <span className="spanut">Tecnologias utilizadas: <span className="react">ReactJS</span>, <span className="html">HTML</span>, <span className="css">CSS</span> .</span> <br />
                            <div className="btngrpf">
                                <a className="linksite" href="https://samyrmarjoub.github.io/Fallguys/" target="_blank" rel="noreferrer">
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

export default Fallguys