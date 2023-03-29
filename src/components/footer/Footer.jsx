import React from 'react'
import ball from '../../assert/img/footer/ball-_-.png'
import github from '../../assert/img/footer/github.png'
import twitter from '../../assert/img/footer/twitter.png'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>Copyright © 2023 All rights reserved.</li>
                <li className='footer--icons'>
                    <img src={github} alt="" />
                    <img src={twitter} alt="" />
                    <img src={ball} alt="" />
                </li>
                <li>
                    Source code available
                </li>
            </ul>
        </div>
    )
}

export default Footer