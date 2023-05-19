import React from 'react'
import './about.css'
import ME from '../../assets/me4.JPEG'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolder} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about__card'>
              <HiOutlineFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Delivered</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusamus facere quisquam eligendi 
            libero consequuntur, similique at dicta reiciendis aspernatur, repudiandae nisi rem? Blanditiis 
            eligendi maxime aut ullam beatae accusamus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About