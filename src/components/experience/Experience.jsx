import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Exeperience() {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML & CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              
              <div>
                <h4>BootStrap & Tailwind</h4>
                <small className='text-light'>Experience</small
              ></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS & React.JS</h4>
                <small className='text-light'>Experience</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>No-Code</h4>
                <small className='text-light'>Wix & Square Space</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>UI/UX</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>  
{/*End of front end section*/}

        <div className="experience__backend">
        <h3>Back End Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML & CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              
              <div>
                <h4>BootStrap & Tailwind</h4>
                <small className='text-light'>Experience</small
              ></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS & React.JS</h4>
                <small className='text-light'>Experience</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>No-Code</h4>
                <small className='text-light'>Wix & Square Space</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>UI/UX</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exeperience