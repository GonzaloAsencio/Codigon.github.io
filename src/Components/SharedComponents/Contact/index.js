import React, { useEffect} from 'react';
import './Contact.css';
import paperFlyImage from '../../../assets/Image/ContactMe/paperfly1.png';
import paperFlyImage2 from '../../../assets/Image/ContactMe/paperfly2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  useEffect(()=> {
    const messageCircle = document.querySelector('.messageIcon');
    const messageInputs = document.querySelector('.message-inputs');
    const messageIcon = document.querySelector('.msgicon');
    const messageOpenIcon = document.querySelector('.msgiconOpen');
    messageCircle.addEventListener("click", ()=> {
      messageCircle.classList.toggle("disappear-animation");
      messageIcon.style.display='none';
      messageOpenIcon.style.visibility = 'visible';
      messageCircle.onanimationend = () => {
        messageCircle.style.display='none';
      };
      messageInputs.classList.toggle("appear-animation");
    });
  },[]);

  return (
    <div className='contact-me'>
        <div className='message-container'>
          <div className='message-title'>
            <h2>¿QUERES CONTACTARTE CONMIGO?</h2>
            <h2>ENVIAME UN MENSAJE</h2>
          </div>
          <div className='message-text'>
              <button className='messageIcon'><FontAwesomeIcon className='msgicon' icon={faEnvelope}/><FontAwesomeIcon className='msgiconOpen' icon={faEnvelopeOpen}/></button>
              <div className='message-inputs'>
                <div className='from-input-container'>
                  <input type="text" placeholder='Nombre' className='from-input'/>
                </div>
                <div className='from-input-container'>
                  <input type="text" placeholder='Email' className='from-input'/>
                </div>
                <textarea name="" id="" cols="25" rows="3" className='from-text-area'></textarea>
                <button className='from-text-button'>Enviar</button>
              </div>
            </div>
          </div>
          <div className='contact-me-image'>
            <img src={paperFlyImage2} alt="" />
            <img src={paperFlyImage} alt="" />
          </div>
      </div>
  );
}

export default Contact;