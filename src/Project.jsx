import React from 'react'

const Project = ({ title, url, image }) => {
   return (
      <article className='project'>
         <a href={url} target='_blank'>
            <img src={image} alt={title} className='img' />
         </a>
         <h5>{title}</h5>
      </article>
   )
}

export default Project
