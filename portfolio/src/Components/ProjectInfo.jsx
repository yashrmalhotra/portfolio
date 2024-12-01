import React, { useState } from 'react'
import "../App.css"
const ProjectInfo = ({ info }) => {
    const [index, setIndex] = useState(0)
    const next = (item) => {
        if (index === item.img.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = (item) => {
        if (index === 0) {
            setIndex(item.img.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <>

            <section id="projects_info">
                <div className="info">
                    <h1 >Projects</h1>

                    {
                        info.project.map((item) => (
                            <div key={item.id} className='project_list'>
                                <h2>{item.title}</h2>
                                <div className="about_project">
                                    <div className="project_img_slider">
                                    <button className='navLeft' onClick={()=>prev(item)}>&lt;</button>
                                        <div id="img-slider-helper">
                                            <img src={item.img[index]} alt="img" className='project_image' />
                                        </div>
                                    <button className='navRight' onClick={() => prev(item)}>&gt;</button>
                                    </div>
                                    <div className="project_desc">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default ProjectInfo
