import React from "react";
import financasi from '../images/imgp1.png'
import financasi2 from '../images/imgt2.png'
import financasi3 from '../images/imgt3.png'
// import logo from '../images/logo (2).png'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/zoom"
import { A11y, Autoplay, Navigation, Zoom } from "swiper";


function Financas() {

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
                        <span className="titlechild">Gerenciador de Financas</span>
                    </div>
                    <div className="containerimgc">
                        <div className="imgdivc">
                            <Swiper navigation={true} a11y={true} autoplay={true} zoom={true} modules={[Navigation, Autoplay, A11y, Zoom]} className="mySwiper">
                                <SwiperSlide><img src={financasi} className='imgslider' alt="" /></SwiperSlide>
                                <SwiperSlide><img src={financasi2} className='imgslider' alt=""/></SwiperSlide>
                                <SwiperSlide><img src={financasi3} className='imgslider' alt="" /></SwiperSlide>
                              
                            </Swiper>
                        </div>
                    </div>
                    <div className="parahraphcontainer">
                        <div className="flexparagraph">
                            <p>Este projeto atende as necessidas de qualquer restaurente, um gerenciador financeiro
                                com todo tipo de ferramentas necessarias para administração de recursos. Este projeto é um projeto REAL, foi requisitado pelo restaurente ComidaDiCasa e muito provavelmente eles estão satisfeitos com o resultado.
                            </p>
                            <span className="spanut">Tecnologias utilizadas: <span className="react">ReactJS</span>, <span className="node">NodeJS</span>, <span className="sql">Mysql</span> .</span> <br />
                            <div className="btngrpf">
                                <button className="button-74 btnp" onClick={()=>{alert('Visualização indisponível')}}>
                                    Checar Site!
                                </button>
                              
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Financas