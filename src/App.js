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
import feliz from './images/feliz.svg'
import muitofeliz from './images/muitofeliz.svg'
import mediano from './images/mediano.svg'
import triste from './images/triste.svg'
import emailjs from '@emailjs/browser'
import deletar from './images/delete.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { Link as Linka } from 'react-router-dom'



const App = () => {

  const [emaili, setEmaili] = useState('')
  const [nomei, setNomei] = useState('')
  const [assuntoi, setAssuntoI] = useState('')
  const [titulo, setTitulo] = useState('')
  const [condicao, setCondicao] = useState(false)
  const [condicao2, setCondicao2] = useState(false)
  const [condicao3, setCondicao3] = useState(false)
  const [condicao4, setCondicao4] = useState(false)
  const [letOpen, setOpen] = useState(false)
  const [sorte, setSorte] = useState(false)


  useEffect(() => {
    digitacao2()
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

  function digitacao2() {

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["VISITANTE.", "CURIOSO.", "AMIGO."];
    const typingDelay = 150;
    const erasingDelay = 150;
    const newTextDelay = 1500; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      }
      else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      }
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);

    }

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
    if (msgi.checkValidity() && condicao4 && assuntoi.length >= 15) {
      msgi.classList.remove('err0r')
      msgi.classList.add('sucess')
    } else if (condicao4 && assuntoi.length < 15) {
      msgi.classList.remove('sucess')
      msgi.classList.add('err0r')
    }
    if (msgform.checkValidity() && condicao && condicao2 && condicao3 & condicao4 && assuntoi.length >= 15) {
      butaum.classList.remove('err0r')
      butaum.classList.add('sucess', 'btnv')
    } else if ((msgform.checkValidity() === false && condicao) || condicao2 || condicao3 || condicao4) {
      butaum.classList.remove('sucess', 'btnv')
      butaum.classList.add('err0r')
      return
    }
  }, [assuntoi, condicao, condicao2, condicao3, condicao4, emaili, nomei.length, titulo.length])

  function submitado(e) {
    e.preventDefault()
    if (assuntoi.length < 15) {
      alert('A mensagem tem que ter 15 ou mais caracteres.')
      return
    } else {
      const templeteParams = {
        from_name: nomei,
        message: assuntoi,
        email: emaili,
        title_message: titulo
      }

      emailjs.send('service_j294swc',
        'template_payed8r', templeteParams, 'FDb2tJsOx4XRX444P').then((response) => {
          console.log('email Enviado', response.status, response.text)
          setNomei('')
          setEmaili('')
          setAssuntoI('')
          setTitulo('')
        }, (err) => {
          console.log('failed', err)
        })
      const blackscreenp = document.querySelector('.blackscreenp')
      const sucessbox = document.querySelector('.sucessbox')
      sucessbox.classList.add('blockscreenp1')
      blackscreenp.classList.add('blockscreenp')
      document.body.style.overflow = 'hidden'
    }

  }

  useEffect(() => {
  }, [letOpen])
  function submitar() {
    const menuBtn = document.querySelector('.menu-btn');
    const header = document.querySelector('.header')
    if (!letOpen) {
      menuBtn.classList.add('open');
      header.classList.add('aumento')
      setOpen(true);
    } else {
      menuBtn.classList.remove('open');
      header.classList.remove('aumento')

      setOpen(false);
    }

  }
  function blackscreenfechar() {
    const blackscreenp = document.querySelector('.blackscreenp')
    const sucessbox = document.querySelector('.sucessbox')
    const luckydiv = document.querySelector('.divlucky')
    blackscreenp.classList.remove('blockscreenp')
    sucessbox.classList.remove('blockscreenp1')
    luckydiv.classList.remove('divluckyf')

    document.body.style.overflow = 'initial'
  }
  function tentarsorte() {
    const blackscreenp = document.querySelector('.blackscreenp')
    const luckydiv = document.querySelector('.divlucky')
    const sucessanimation = document.querySelector('.success-animation')
    let rndInt = Math.floor(Math.random() * 10) + 1
    const txtsorte = document.querySelector('.textsorte')
    const txtnumsorte = document.querySelector('.spansorte')
    const lgds = document.querySelector('.lds-ring')
    const imgface = document.querySelector('.imgface')
    if (window.innerWidth < 360) {
      return
    }
    blackscreenp.classList.add('blockscreenp')
    luckydiv.classList.add('divluckyf')
    document.body.style.overflow = 'hidden'
    rndInt = 10
    if (sorte === false) {
      setTimeout(() => {
        sucessanimation.classList.add('noneloading')
        lgds.style.display = 'none'
        imgface.style.display = 'block'
        if (rndInt === 1 || rndInt === 2 || rndInt === 3) {
          txtsorte.innerHTML = 'Parece que sua sorte ta bem mal em... recomendo não sair de casa hoje e não se arriscar muito, certo?'
          imgface.src = triste
          imgface.classList.add('svgtriste')
          txtnumsorte.innerHTML = `Sua sorte é: <span class='spanred'>${rndInt}</span> de 10`

        } else if (rndInt === 4 || rndInt === 5 || rndInt === 6) {
          txtsorte.innerHTML = 'Bem sua sorte esta ruim mas podia estar pior... recomendo não fazer apostar em jogos de azar hoje e nem comprar bitcoin.'
          imgface.src = mediano
          imgface.classList.add('svgmediano')
          txtnumsorte.innerHTML = `Sua sorte é: <span class='spanlaranja'>${rndInt}</span> de 10`

        } else if (rndInt === 7 || rndInt === 8 || rndInt === 9) {
          txtsorte.innerHTML = 'Amigo sua sorte é boa, mas podia estar melhor... aproveite o dia, eu tenho certeza que você vai gostar do agora.'
          imgface.src = feliz
          imgface.classList.add('svgfeliz')
          txtnumsorte.innerHTML = `Sua sorte é: <span class='spanfeliz'>${rndInt}</span> de 10`

        } else if (rndInt === 10) {
          txtsorte.innerHTML = 'Uau, você tirou a sorte GRANDE, meus parabens!! eu fortemente recomendo fazer aquilo que você estava deixando de lado e aproveitar o dia, pois dias como esses são bem raros.'
          imgface.src = muitofeliz
          imgface.classList.add('svgmuitofeliz')
          txtnumsorte.innerHTML = `Sua sorte é: <span class='spanmuitofeliz'>${rndInt}</span> de 10`

        }

      }, 3000)
    } else {
      return
    }
    setSorte(true)



  }

  return (
    <>
      <div className='blackscreenp'></div>
      <div className='sucessbox'>
        <div className='sucessboxflex'>
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
          </div>

          <div className='divparagraphe'>
            <p className='paragraphmsgemail'>Mensagem enviada com sucesso! Obrigado pela mensagem, tentarei responder ao seu email o  mais rápido possivel!! {':)'}</p>
          </div>
          <img src={deletar} className='fecharsvg' onClick={blackscreenfechar} alt='' />

        </div>

      </div>
    
      <div className="maincontainer">
        <div className='divlucky'>
          <div className='flexdivlucky'>
            <div className='divh6l'>
              <h6 className='loadinglucky'>Testando sua sorte!!</h6>
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              <div className='divface'>
                <img src={''} alt='' className='imgface' />
              </div>
              <img src={deletar} className='fecharsvg' onClick={blackscreenfechar} alt='' />
              <span className='spansorte'></span>
              <span className='textsorte'></span>

            </div>
          </div>
        </div>
        <header className='header darker'>
          <div className='headerwidth'>
            <div className='desktopm'>
              <div className='divlogoc'>
                <div className='containerlogo'>
                  <img src={logo} className='imagemlogo' alt='' />
                </div>
              </div>
              <div className='divhlists'>
                <ul className='ulli unstyled-list'>
                  <li><Link smooth={true} to='#projetos'>PROJETOS</Link></li>
                  <li><Link smooth={true} to='#skills'>SOBRE</Link> </li>
                  <li><Link smooth={true} to='#contato'>CONTATO</Link> </li>

                </ul>
                <div className='hamburguerdiv'>
                  <div className="menu-btn" onClick={submitar}>
                    <div className="menu-btn__burger"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='menumobiledev'>
              <ul className='unstyled-list'>
                <li><Link smooth={true} to='#projetos'>PROJETOS</Link></li>
                <li><Link smooth={true} to='#skills'>SOBRE</Link></li>
                <li><Link smooth={true} to='#contato'>CONTATO</Link> </li>

              </ul>
            </div>

          </div>

        </header>

        <div className='mainflexc'>
          <div className="container">

            <h1>OLÁ, <span className='typed-text'></span> <span className='cursor'>&nbsp;</span>
            </h1>
          </div>

          <span className='spanmainflex'>Me chamo <span className='spanmaked'>Samyr Marjoub</span>, seja bem vindo(a) ao meu portofolio!</span>
          <div className='groupdivb' >
            <Link to={'#projetos'} smooth={true}>  <button className="button-74"> Ver projetos! </button></Link>
            <button className="button-74" style={{ marginRight: '0px' }} onClick={tentarsorte} >Tente a sorte!</button>


          </div>
        </div>
      </div>

      <div className='secondcontainer' id='projetos'>


        <div className='secc'>
          <div className='divprjtsf'><h1>PROJETOS E FUTURAS IDEIAS</h1></div>
          <div className='fullsec'>

            <div className='fulsec1'>
              <div className='pointdivsab firstpointdivsap'>
                <img src={qt6} alt='' />
              </div>
              <div className='filterdiv firstfilterdiv'>
                <label htmlFor="check">
                  <input type="checkbox" id="check" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className='gamcontainer'>
                <div className='pointdivsab secondpointdivsab'>
                  <img src={qt6} alt='' />
                </div>
                <div className='filterdiv secondfilterdiv'>
                  <label htmlFor="check2">
                    <input type="checkbox" id="check2" />
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                </div>
                <div className='divgamct'>
                  <h3>Bem vindo visitante!</h3>
                  <span>Aqui esta algum dos meus projetos</span>
                </div>
                <div className='inputdiv'>
                  <img src={search} alt='' />
                  <input type={'search'} disabled={true} className='projectsinput' placeholder='Pesquise por projetos...' />
                </div>
                <div className='projectsdiv'>
                  <div className='titleproject'>
                    <h4>Projetos (15)</h4>

                  </div>
                  <div className='gridprojects'>
                    <Linka to={'/gerenciadorfinancas'}>
                      <div className='grid1 grid'>
                        <span className='insidegrid'>GF</span>
                        <span className='foragrid'>Gerenciador Financeiro</span>
                      </div>
                    </Linka>
                    <Linka to={'/gerenciadornotas'}>
                      <div className='grid grid2'>
                        <span className='insidegrid'>GN</span>
                        <span className='foragrid'>Gerenciador de Notas</span>
                      </div>
                    </Linka>
                    <Linka to={'/genshinpage'}>
                      <div className='grid grid3'>
                        <span className='insidegrid'>GI</span>
                        <span className='foragrid'>Genshin Impact</span>
                      </div>
                    </Linka>
                    <Linka to={'/fallguyspage'}>
                      <div className='grid grid4'>
                        <span className='insidegrid'>FG</span>
                        <span className='foragrid'>Fall Guys</span>
                      </div>
                    </Linka>
                    <Linka to={'/firstportfolio'}>
                      <div className='grid grid5'>
                        <span className='insidegrid'>PA</span>
                        <span className='foragrid'>Portfolio Antigo</span>
                      </div>
                    </Linka>

                    <div className='grid grid6'>
                      <span className='insidegrid' onClick={() => { alert('Em Breve') }}>+7</span>

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
                <h5>Ideais e Projetos</h5>
                <p className='paragraphfulsec2'>Nesta seção, vou deixar um pouco de como pretendo continuar na área de TI, seja a curto prazo ou a longo prazo. Ideias, projetos e etc.</p>
                <div className='headerfulsec2'>
                  <span className='todayspan'>Objetivos</span>
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
                      <p>Estudar HTML</p>
                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv green'>
                        <span className='spangreen'>Feito!</span>
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
                      <p>Estudar CSS</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv green'>
                        <span className='spangreen'>Feito!</span>
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
                      <p>Começar no Javascript</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv green'>
                        <span className='spangreen'>Feito!</span>
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
                      <p>Começar no ReactJS</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv green'>
                        <span className='spangreen'>Feito!</span>
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
                      <p>Fazer projetos com NodeJS</p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv blue'>
                        <span className='spanblue'>Em curso</span>
                      </div>
                    </div>
                  </div>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Melhorar em UI/UX </p>

                    </div>
                    <div className='columnf3'>
                      <div className='statusdiv laranja'>
                        <span className='spanorange'>Em Revisão</span>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='headerfulsec2'>
                  <span className='todayspan'>Em Breve</span>
                  <img src={tresp} className='tresp' alt='' />

                </div>
                <div className='columnscontainer'>
                  <div className='columndivmain'>
                    <div className='columnf1'>
                      <div className='bolacheckn'>

                      </div>

                    </div>
                    <div className='columnf2'>
                      <p>Python para Machine Learning e IA</p>

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
                      <p>CyberSecurity: Web Hacking </p>

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
                      <p>SQL (Não relacionado) </p>

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
                <input required type={'text'} className='nomeinput marginrito' value={nomei} maxLength={30} minLength={3} onInput={() => { setCondicao2(true) }} onChange={(e) => { setNomei(e.target.value) }} placeholder='Nome' />
                <input required type={'email'} className='emailinput' value={emaili} onInput={() => { setCondicao(true) }} onChange={(e) => { setEmaili(e.target.value) }} placeholder='Email' />
              </div>
              <div className='onerowform'>
                <input required type={'text'} className='assuntoinput' value={titulo} maxLength={50} minLength={10} onInput={() => { setCondicao3(true) }} onChange={(e) => { setTitulo(e.target.value) }} placeholder='Assunto' />
              </div>
              <div className='onerowform'>
                <textarea required placeholder='Mensagem' value={assuntoi} className='mensageminput' maxLength={300} minLength={15} onInput={() => { setCondicao4(true) }} onChange={(e) => { setAssuntoI(e.target.value) }} />
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
              <a href='https://www.linkedin.com/in/samyr-marjoub-388a7b222/'>
                <div className='quadradocontainer'> <img src={linkedin} alt='' /> </div>
              </a>
              <a href='https://www.facebook.com/samir.marjoub/'>
                <div className='quadradocontainer'> <img src={facebook} alt='' /></div>
              </a>
              <a href='https://github.com/SamyrMarjoub'>
                <div className='quadradocontainer quadradocontainerl'> <img src={github} alt='' /></div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
