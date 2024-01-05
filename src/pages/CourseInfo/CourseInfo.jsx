import React from 'react'

import './CourseInfo.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

export default function CourseInfo() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Breadcrumb links={
      [
        {id:1 , title:"خانه" , to:""},
        {id:2 , title:"برنامه نویسی فرانت اند" , to:"category-info/frontend"},
        {id:3 , title:"دوره متخصص جاوااسکریپت" , to:"course-info/js"},
      ]
    }/>
    </>
  )
}
