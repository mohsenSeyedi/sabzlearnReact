import Index from "./pages/Index/Index.jsx"
import CourseInfo from "./pages/CourseInfo/CourseInfo.jsx"
import Category from "./pages/Category/Category.jsx"
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo.jsx"

const routes = [
    { path: '/', element: <Index></Index> },
    { path: '/course-info/:courseName', element: <CourseInfo></CourseInfo> },
    { path: '/category-info/:categoryName', element: <Category ></Category> },
    { path: '/article-info/:articleName', element: <ArticleInfo ></ArticleInfo> },
]

export default routes