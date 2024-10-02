import React from 'react'
import Hero from '../components/Hero'
import Facilities from '../components/Facilities'
import Products from '../components/Products'
import Experiences from '../components/Experiences'
import Materials from '../components/Materials'
import Testimonial from '../components/Testimonial'


function Home() {
  return (
    <>
      <Hero/>
      <Facilities/>
      <Products headline='Customer favorites'/>
      <Experiences/>
      <Materials/>

      <Testimonial/>
     

    </>
  )
}

export default Home