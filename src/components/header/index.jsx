import React from 'react';
import s from './header.module.css';
import { MdEmail, MdLocationCity, MdPhone } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import photo from '../../assets/images/photo.jpg';

const Header = () => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <div className={s.biography}>
                    <h1 className={s.full_n}>Mukhammadzhon Khakimov</h1>
                    <h3 className={s.position}>Frontend Developer</h3>
                    <p className={s.description}>I'm a self study frontend developer. The purpose for my last 5 years search happens to find the job which I love. And I realize only web coding going to feel my life path!</p>
                </div>
                <div className={s.photo}><img src={photo} alt="Avatar"/></div>
                <div className={s.contacts}>
                    <ul>
                        <IconContext.Provider value= {{color: '#cca766', size: '20', style: { verticalAlign: 'top'}}}>
                        <li>
                            <a className={s.link} rel="noreferrer" target='_blank' href="mailto:hmuhammadjon@gmail.com">Email <MdEmail /> </a>
                        </li>
                        <li>
                            <a className={s.link} rel="noreferrer" target='_blank' href="telto:+996555004345">+996 (555) 004 345 <MdPhone /> </a>
                        </li>
                        <li>
                            <a className={s.link} rel="noreferrer" target='_blank' href="https://goo.gl/maps/3pc24sDWgpH8o8tY6"> Osh, Kyrgyzstan <MdLocationCity /> </a>
                        </li>
                        <li>
                            <a className={s.link} rel="noreferrer" target='_blank' href="https://linkedin.com/in/mukhammadzhon-k-2a3384141">Linkedin <FaLinkedin /> </a>
                        </li>
                        </IconContext.Provider>
                    </ul>

                </div>
                
            </header>
        </div>
    )
}

export default Header;