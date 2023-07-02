import React from 'react'
import hero from './assets/hero.svg'

const Hero = () => {
   return (
      <section className='hero'>
         <div className='hero-center'>
            <div className='hero-title'>
               <h1>Contentful CMS</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  modi, sunt accusantium culpa nostrum exercitationem, explicabo
                  necessitatibus quidem recusandae eveniet doloremque quas
                  perspiciatis suscipit placeat! Minus ut quas tempora dolor?
               </p>
            </div>
            <div className='img-container'>
               <img src={hero} alt='hero img' className='img' />
            </div>
         </div>
      </section>
   )
}

export default Hero
