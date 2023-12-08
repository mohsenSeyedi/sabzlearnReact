import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  return (
    <>
      <div className="courses">
        <div className="container">

        <SectionHeader
          title='جدیدترین دوره ها'
          desc='سکوی پرتاپ شما به سمت موفقیت'
          btnTitle="تمامی دوره ها"
        />
        <div className="courses-box">
          <CourseBox/>
          <CourseBox/>
          <CourseBox/>
        </div>
        </div>
      </div>
    </>
  );
}
