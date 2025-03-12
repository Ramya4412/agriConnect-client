import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Layout(){
    return <>
    <Header/>
    <Outlet/>
    {/* <h1 style={{height: "100vh"}}>HI</h1> */}
    <Footer/>
    </>
}