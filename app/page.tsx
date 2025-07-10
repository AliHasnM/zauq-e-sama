
import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedCourses from './components/FeaturedCourses'
import WhyChooseUs from "./components/WhyChooseUs"
import TestimonialCards from './components/TestimonialCards'
import UpcomingWebinar from './components/UpcomingWebinar'
import Instructors from './components/Instructors'
import Footer from './components/Footer'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.1] dark:bg-grid-black/[0.2]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Courses />
      <Instructors />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Home