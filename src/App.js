import './index.css'
import logo from './images/logo (2).png'
import React, { useEffect, useState } from 'react'
import search from './images/search.svg'
import qt6 from './images/qt63.png'
import tresp from './images/pontinhos.svg'
import check from './images/check.svg'
import more from './images/more.svg'
import react from './images/react.svg'
import node from './images/node.svg'
import html from './images/html.svg'
import javascript from './images/javascript.svg'
import linkedin from './images/linkedin-svg.svg'
import facebook from './images/icon-facebook.svg'
import github from './images/icon-github.svg'
import { HashLink as Link } from 'react-router-hash-link'

function App() {

  const [emaili, setEmaili] = useState('')
  const [nomei, setNomei] = useState('')
  const [assuntoi, setAssuntoI] = useState('')
  const [titulo, setTitulo] = useState('')
  const [condicao, setCondicao] = useState(false)
  const [condicao2, setCondicao2] = useState(false)
  const [condicao3, setCondicao3] = useState(false)
  const [condicao4, setCondicao4] = useState(false)



  useEffect(() => {
    ComecarAn()
    scrollmenu()
  }, [])

  function scrollmenu() {
    const header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        header.classList.remove('darker')
        header.classList.add('notsodarker', 'minimizedheader')
      } else {
        header.classList.add('darker')
        header.classList.remove('notsodarker')
        header.classList.remove('notsodarker', 'minimizedheader')

      }

    });

  }
  function ComecarAn() {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }

      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }
  useEffect(() => {
    const emailis = document.querySelector('.emailinput')
    const nomeis = document.querySelector('.nomeinput')
    const titlei = document.querySelector('.assuntoinput')
    const msgi = document.querySelector('.mensageminput')
    const butaum = document.querySelector('.butaum')
    const msgform = document.querySelector('.msgform')
    if (emailis.checkValidity() && condicao) {
      emailis.classList.remove('err0r')
      emailis.classList.add('sucess')
    } else if (emailis.checkValidity() === false && condicao === true) {
      emailis.classList.remove('sucess')
      emailis.classList.add('err0r')
    }
    if (nomeis.checkValidity() && condicao2) {
      nomeis.classList.remove('err0r')
      nomeis.classList.add('sucess')
    } else if (nomeis.checkValidity() === false && condicao2) {
      nomeis.classList.remove('sucess')
      nomeis.classList.add('err0r')
    }

    if (titlei.checkValidity() && condicao3) {
      titlei.classList.remove('err0r')
      titlei.classList.add('sucess')
    } else if (titlei.checkValidity() === false && condicao3) {
      titlei.classList.remove('sucess')
      titlei.classList.add('err0r')
    }
    if (msgi.checkValidity() && condicao4) {
      msgi.classList.remove('err0r')
      msgi.classList.add('sucess')
    } else if (msgi.checkValidity() === false && condicao4) {
      msgi.classList.remove('sucess')
      msgi.classList.add('err0r')
    }
    if (msgform.checkValidity() && condicao && condicao2 && condicao3 & condicao4) {
      butaum.classList.remove('err0r')
      butaum.classList.add('sucess', 'btnv')
    } else if ((msgform.checkValidity() === false && condicao) || condicao2 || condicao3 || condicao4) {
      butaum.classList.remove('sucess', 'btnv')
      butaum.classList.add('err0r')
    }
  }, [assuntoi, condicao, condicao2, condicao3, condicao4, emaili, nomei.length, titulo.length])

  function submitado(e) {
    e.preventDefault()
  }


  return (
    <>
      <div className="maincontainer">
        <header className='header darker'>
          <div className='headerwidth'>
            <div className='divlogoc'>
              <div className='containerlogo'>
                <img src={logo} className='imagemlogo' alt='' />
              </div>
            </div>
            <div className='divhlists'>
              <ul>
                <li><Link smooth={true} to='#projetos'>PROJETOS</Link></li>
                <li><Link smooth={true} to='#skills'>SOBRE</Link> </li>
                <li><Link smooth={true} to='#contato'>CONTATO</Link> </li>

              </ul>
            </div>
          </div>


        </header>
        <div className='mainflexc'>
          <h1>OLÁ, <span href="" className="typewrite" data-period="2000" data-type='[ "VISITANTE.", "CURIOSO.", "AMIGO." ]'>
            <span className="wrap"></span>
          </span>
          </h1>
          <span className='spanmainflex'>Me chamo <span className='spanmaked'>Samyr Marjoub</span>, seja bem vindo(a) ao meu portofolio!</span>
          <div className='groupdivb'>
            <button className="button-74"> <Link to={'#projetos'} smooth={true}>Ver projetos!</Link> </button>
            <button className="button-74">Tente a sorte!</button>


          </div>
        </div>
      </div>

      <div className='secondcontainer' id='projetos'>
        <div className='secc'>
          <div><h1>PROJETOS E FUTURAS IDEIAS</h1></div>
          <div className='fullsec'>
            <div className='fulsec1'>
              <div className='pointdivsab'>
                <img src={qt6} alt='' />
              </div>
              <div className='filterdiv'>
                <label for="check">
                  <input type="checkbox" id="check" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className='gamcontainer'>
                <div className='divgamct'>
                  <h3>Bem vindo visitante!</h3>
                  <span>Aqui esta algum dos meus projetos</span>
                </div>
                <div className='inputdiv'>
                  <img src={search} alt='' />
                  <input type={'search'} placeholder='Pesquise por projetos...' />
                </div>
                <div className='projectsdiv'>
                  <div className='titleproject'>
                    <h4>Projetos (15)</h4>

                  </div>
                  <div className='gridprojects'>
                    <div className='grid1 grid'>
                      <span className='insidegrid'>GH</span>
                      <span className='foragrid'>Green house</span>
                    </div>
                    <div className='grid grid2'>
                      <span className='insidegrid'>CP</span>
                      <span className='foragrid'>Cyber Punk</span>
                    </div>
                    <div className='grid grid3'>
                      <span className='insidegrid'>EC</span>
                      <span className='foragrid'>Easy Crypto</span>
                    </div>
                    <div className='grid grid4'>
                      <span className='insidegrid'>TA</span>
                      <span className='foragrid'>Travel App</span>
                    </div>
                    <div className='grid grid5'>
                      <span className='insidegrid'>LP</span>
                      <span className='foragrid'>Landing Page</span>
                    </div>
                    <div className='grid grid6'>
                      <span className='insidegrid'>+8</span>

                    </div>

                  </div>
                  <div className='pointdivsab2'>
                    <img src={qt6} alt='' />
                  </div>
                </div>
              </div>

            </div>
            <div className='fulsec2'>
              <div className='fulsec2container'>
                <h5>Cyber Punk</h5>
                <p className='paragraphfulsec2'>Lorem impsum dolor sit amet, consectetur adispiscing elit,sed do eisumod tempor incididunt.</p>
                <div className='headerfulsec2'>
                  <span className='todayspan'>Today</span>
                  <img src={tresp} className='tresp' alt='' />
                </div>
                <div className='columnscontainer'>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheck'>
                        <img src={check} alt='' />
                      </div>
                    </div>
                    <div className='columnf2'>
                      <p>Criar uma página inicial para o site</p>
                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv green'>
                        <span className='spangreen'>Aprovado</span>
                      </div>
                    </div>

                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheck'>
                        <img src={check} alt='' />

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Começar a segunda parte do site</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv blue'>
                        <span className='spanblue'>Em progresso</span>
                      </div>
                    </div>

                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheck'>
                        <img src={check} alt='' />

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Colocar imagens e consertar CSS</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv blue'>
                        <span className='spanblue'>Em progresso</span>
                      </div>
                    </div>

                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheck'>
                        <img src={check} alt='' />

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Construção do footer da página</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv blue'>
                        <span className='spanblue'>Em progresso</span>
                      </div>
                    </div>
                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheck'>
                        <img src={check} alt='' />

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv laranja'>
                        <span className='spanorange'>Em revisão</span>
                      </div>
                    </div>
                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv cinza'>
                        <span className='spancinza'>Em espera</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='headerfulsec2'>
                  <span className='todayspan'>Upcoming</span>
                  <img src={tresp} className='tresp' alt='' />

                </div>
                <div className='columnscontainer'>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv cinza'>
                        <span className='spancinza'>Em espera</span>
                      </div>
                    </div>
                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv cinza'>
                        <span className='spancinza'>Em espera</span>
                      </div>
                    </div>
                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv cinza'>
                        <span className='spancinza'>Em espera</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='enddiv'>
                  <div className='adcbutton'>
                    <img src={more} alt='' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='thirdcontainer' id='skills'>
        <div className='thirdcmh'>
          <h1>MINHAS HABILIDADES</h1>

          <div className='testediv'>
            <div className='flext1 flext2'>

              <div className='containerleanguagesstatus'>
                <div className='ldiv' style={{ marginTop: '0' }}>
                  <span className='taskspan'>Front-end</span>
                  <div className='loadcontainer'>
                    <div className='loader l1'></div>
                  </div>
                </div>
                <div className='ldiv'>
                  <span className='taskspan'>Back-end</span>
                  <div className='loadcontainer'>
                    <div className='loader l2'></div>
                  </div>
                </div>
                <div className='ldiv'>
                  <span className='taskspan'>ReactJS</span>
                  <div className='loadcontainer'>
                    <div className='loader l3'></div>
                  </div>
                </div>
                <div className='ldiv'>
                  <span className='taskspan'>NodeJS</span>
                  <div className='loadcontainer'>
                    <div className='loader l4'></div>
                  </div>
                </div>

              </div>

            </div>
            <div className='flext1'>
              <div className='flext1c'>
                <p>Bom, desde o começo do meu primeiro contato com programação, eu simplesmente amei o que estava fazendo, começei com a linguagem Java
                  mas depois fui voluntariamente ao desenvolvimento Web.
                  Atualmente, tenho conhecimento em HTML, CSS, JS. Mas sendo sincero, após aprender ReactJS,
                  eu não toquei mais no HTML puro. Bem, sobre meu conhecimento em back-end, eu uso o proprio JS para isso (NodeJS).
                </p>

              </div>

            </div>

            <div className='languagesdivs'>
              <div className='languagesdivsc'>
                <span className='spanvoador s1'>PYTHON</span>
                <span className='spanvoador s2'>CSS</span>
                <span className='spanvoador s3'>HTML</span>
                <span className='spanvoador s4'>JAVASCRIPT</span>
                <span className='spanvoador s5'>REACTJS</span>
                <span className='spanvoador s6'>NODEJS</span>
                <span className='spanvoador s7'>CANVA</span>
                <span className='spanvoador s8'>MONGODB</span>
                <span className='spanvoador s9'>SQL</span>
                <div className='maincontainersvgslanguanges'>
                  <div><img src={html} className='icon1' alt='' /></div>
                  <div><img src={javascript} className='icon2' alt='' /></div>
                  <div><img src={react} className='icon3' alt='' /></div>
                  <div><img src={node} className='icon4' alt='' /></div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fourthc' id='contato'>
        <div className='fourthcontainer'>
          <div className='fourthh1'>
            <h1>CONTATE-ME</h1>

          </div>
          <div className='contactps'>
            <p>Quer tirar umas duvidas, conversar, ou até mesmo requisitar algum serviço? se sim, por favor,
              não hesite em usar este <span className='formspanc'>formulário</span> !</p>
          </div>
          <div className='containerformf'>
            <form className='msgform' onSubmit={submitado}>
              <div className='tworowsform'>
                <input required type={'text'} className='nomeinput' maxLength={30} minLength={3} onInput={() => { setCondicao2(true) }} onChange={(e) => { setNomei(e.target.value) }} placeholder='Nome' style={{ marginRight: '50px' }} />
                <input required type={'email'} className='emailinput' onInput={() => { setCondicao(true) }} onChange={(e) => { setEmaili(e.target.value) }} placeholder='Email' />
              </div>
              <div className='onerowform'>
                <input required type={'text'} className='assuntoinput' maxLength={50} minLength={10} onInput={() => { setCondicao3(true) }} onChange={(e) => { setTitulo(e.target.value) }} placeholder='Assunto' />
              </div>
              <div className='onerowform'>
                <textarea required placeholder='Mensagem' className='mensageminput' maxLength={300} minLength={15} onInput={() => { setCondicao4(true) }} onChange={(e) => { setAssuntoI(e.target.value) }} />
              </div>
              <div className='onebuttonform'>
                <input type={'submit'} className='butaum' />

              </div>
            </form>
          </div>

        </div>
        <div className='footer'>
          <div className='marginf'>
            <div className='footer1'>
              <h4>@Samyr Marjoub - 2022</h4>
            </div>
            <div className='footer2'>
              <div className='quadradocontainer'> <img src={linkedin} alt=''/> </div>
              <div className='quadradocontainer'> <img src={facebook} alt=''/></div>
              <div className='quadradocontainer quadradocontainerl'> <img src={github} alt=''/></div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
