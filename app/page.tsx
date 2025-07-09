
import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedCourses from './components/FeaturedCourses'
import WhyChooseUs from "./components/WhyChooseUs"

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.1] dark:bg-grid-black/[0.2]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  )
}

export default Home