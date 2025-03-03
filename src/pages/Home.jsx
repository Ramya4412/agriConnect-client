import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures";
import Footer from "../components/Footer";
export default function Home() {
    return (
        <>
        
        <Hero />
        <About />
        <Services />
        <KeyFeatures />
      
        </>
    )
}