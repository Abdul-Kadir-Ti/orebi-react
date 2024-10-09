import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./layer/RootLayOut";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import Products from "./page/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/sign/up" element={<SignUp/>}></Route>
      <Route path="/prodect" element={<Products/>}></Route>
    </Route>
  )
);


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App