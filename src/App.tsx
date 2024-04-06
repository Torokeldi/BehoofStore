import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Review from "./pages/Review/Review";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Review",
    element: <Review/>,
  },
 
]);



export default () => <RouterProvider router={router}/>