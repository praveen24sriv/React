import React,{ lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";

const Grocery = lazy(()=>import("./components/Grocery"));

 

const AppLayout = ()=>{
     const [user,setUser] = React.useState({
      name:"Praveen ",
      email:"praveen@gmail",});
 

     return (<div className="app ">
      <Provider store={store}>
        <UserContext.Provider
        value={
          {
            user:user,}
            }
        >
        <Header/>
        <Outlet/> 
        <Footer/>
  
        </UserContext.Provider>
       
        </Provider>
     </div>)
 };
 const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      children: [ {
        path: "/",  
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
       path: "/contact",
       element: <Contact/> 
      },
      {
        path:"/grocery",
        element:<Suspense fallback ={<h1>hi</h1>} >
          <Grocery/>
          </Suspense >
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>

      }],
      errorElement: <Error/>
   },
  
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


