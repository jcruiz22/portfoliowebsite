import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jean-carlo-ruiz-78435b1b2/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/jcruiz22" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/jeancaruiz/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/jcruizm22" target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials