import React from 'react'
import useFetchProjects from './fetchData'
import Project from './Project'

const Projects = () => {
   const { loading, projects } = useFetchProjects()
   console.log(projects)
   return (
      <section className='projects'>
         <h3 style={{ textAlign: 'center' }}>Projects</h3>
         {loading ? (
            <div className='projects-center'>
               <h3>Loading...</h3>
            </div>
         ) : (
            <div className='projects-center'>
               {projects.map((proj) => {
                  const { id } = proj
                  return <Project key={id} {...proj} />
               })}
            </div>
         )}
      </section>
   )
}

export default Projects
