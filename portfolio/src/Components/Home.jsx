import React, { useState } from 'react'

import "../App.css"
import ProjectInfo from './ProjectInfo';

const Home = (props) => {


 return (
    <>
     <section id="Section1_Banner" >
        <div id="banner">
            <div id="username">
                {props.data.name}
            </div>

            <div id='profile'>
                <img src="profile.svg" alt="" />
            </div>

        </div>

     </section>

     <section id="about">
        <div className="info">
            <h1 >About Me</h1>
            <div id="about_desc">
              {props.data.about}
            </div>

            <h1>My Skills</h1>
            <div id="skillSet">
                {props.data.skills.map((item,i)=>(

                <div id='skills' key={i}>
                    <img src={item.logo} alt={item.skill} width={30} height={30}/>
                    <span>{item.skill}</span>
                </div>
                ))}
                

            </div>
        </div>
     </section>
     <ProjectInfo info={props.data}/>

     <section id="education">
        <div className="info">
            <h1>Education</h1>
            <div id="academics">
                <div id="degree" className='personal'>
                    <img src={props.data.education.degree_logo} alt="degree_icon" width={70} height={70}/>
                    <span>{props.data.education.degree} ({props.data.education.year}) </span>
                </div>

                <div id="university" className='personal'>
                    <img src={props.data.education.university_logo} alt="cu_icon" width={70} height={70}/>
                    <span>{props.data.education.institute}</span>
                </div>
            </div>
        </div>
     </section>
      
     <section id="contact">
        <div className="info">
        <h1>Contact</h1>
        <div className="links">
            <div id="email" className="personal">
                <img src="email.svg" alt="email" width={70} height={70}/>
                <span>
                <a href={props.data.contact.email.href}>{props.data.contact.email.email_id}</a>
                </span>
            </div>

            <div id="phone" className="personal">
                <img src="phone.svg" alt="email" width={70} height={70}/>
                <span>
                <a href={props.data.contact.phone.href}>{props.data.contact.phone.num}</a>
                </span>
            </div>

            <div id="phone" className="personal">
                <img src="linkedin.svg" alt="email" width={70} height={70}/>
                <span>
                <a href={props.data.contact.linkedin.href} target="_blank">{props.data.contact.linkedin.profile_name}</a>
                </span>
            </div>
        </div>
        </div>
     </section>

    </>
  )
}

export default Home
