import React from 'react'
import contactBoy from '../../assert/img/contact_page.png';
import './contact.scss'



const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact--content">
          <div className="contact--img">
            <img src={contactBoy} alt="contact img" className='imgimg' />
          </div>
          <div className="contact--text">
            <h2>You can reach me any time🙂</h2>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis dolores, eaque fuga at quasi, sint possimus eos, accusantium vero obcaecati? Ipsum accusantium eaque tenetur deleniti odio possimus iusto maxime.</p>
            <p>Twitter: amirhwsin</p>
            <p>Github: amirhwsin</p>
            <p>Dribble: amirhwsin</p>
            <p>Telegram: GeekDreamer</p>
            <p>Email: amirhwsin@outlook.com</p>
            <div className="contact--text__actions">
              <button className="about">About me</button>
              <button className="portfolios">😮Let's see portfolios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact