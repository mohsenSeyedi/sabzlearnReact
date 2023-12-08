import React from 'react'
import Header from '../../Components/Header/Header'

import './Index.css'
import LastCourses from '../../Components/LastCourses/LastCourses'
import Footer from '../../Components/Footer/Footer'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'

export default function Index() {
  return (
    <>
       <Header />
       <LastCourses/>
       <PopularCourses/>
       <Footer/>
    </>
  )
}
