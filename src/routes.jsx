import Index from "./pages/Index/Index"
import Courses from "./pages/Courses/Courses"
import Articles from "./pages/Articles/Articles"
import Categores from "./pages/Categoryes/Categores"

const routes = [
    {path : "/" , element : <Index/>} , 
    {path : "/courses/:courseName" , element : <Courses/>},
    {path : "/articles/:articleName" , element : <Articles/>},
    {path : "/categoryes/:categoryesName" , element : <Categores/>}
]


export default routes