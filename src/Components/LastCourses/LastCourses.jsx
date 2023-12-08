import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";

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

        </div>
      </div>
    </>
  );
}
