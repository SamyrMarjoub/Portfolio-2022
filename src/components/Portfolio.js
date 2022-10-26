import React from "react";
import Portfolio1 from '../images/port1.png'
import Portfolio2 from '../images/port2.png'
import Portfolio3 from '../images/port3.png'
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
    a.href = 'https://samyrmarjoub.github.io/Portfolio/'
}

function Portfolio() {

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
                        <span className="titlechild">Portfolio Page</span>
                    </div>
                    <div className="containerimgc">
                        <div className="imgdivc">
                            <Swiper navigation={true} a11y={true} autoplay={true} zoom={true} modules={[Navigation, Autoplay, A11y, Zoom]} className="mySwiper">
                                <SwiperSlide><img src={Portfolio1} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={Portfolio2} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={Portfolio3} className='imgslider' alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="parahraphcontainer">
                        <div className="flexparagraph">
                            <p>Esta foi a minha primeira página portfolio, foi feita lá em Abril de 2022.. Está desatualizada, mas é ainda sim é um projeto que eu me dediquei bastante. Sinto que, evolui bastante desde sua criação.
                            </p>
                            <span className="spanut">Tecnologias utilizadas: <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="js">Javascript</span> .</span> <br />
                            <div className="btngrpf">
                                <a className="linksite" href="https://samyrmarjoub.github.io/Portfolio/" target="_blank" rel="noreferrer">
                                    <button className="button-74 btnp allowedb" onSubmit={openpage}>
                                        Checar Site!
                                    </button>
                                </a>
{/* Commit teste */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Portfolio