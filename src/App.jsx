import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import Layout from './pages/layout';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {path:"", element:<Home/>},
      {path:"LoginForm", element:<LoginForm/>},
      {path:"SignUp", element:<Registration/>},
      {path:"Profile", element:<Profile/>},
      
    ]
  }
  
]) 



function App() {
  return <RouterProvider router={router} />;
}

// function Hero() {
//   return (
//     <section className="hero">
//       <h1>Empowering Agriculture with Technology</h1>
//       <p>Innovative solutions for sustainable farming.</p>
//       <a href="#contact" className="cta-button">Get Started</a>
//     </section>
//   );
// }

// function About() {
//   return (
//     <section id="about" className="about">
//       <h2>About Us</h2>
//       <p>We provide smart farming solutions to enhance productivity and sustainability.</p>
//       <img src="https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg" alt="Farming Image" />
//     </section>
//   );
// }

// function Services() {
//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="service">
//         <h3>Precision Farming</h3>
//         <p>Using data-driven insights for better yield.</p>
//         <img src="https://www.fieldbee.com/wp-content/uploads/2021/12/5.jpg" alt="Precision Farming" />
//       </div>
//       <div className="service">
//         <h3>Agri-Tech Solutions</h3>
//         <p>Smart devices to monitor crop health.</p>
//         <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/agri_tech.jpeg" alt="Agri-Tech Solutions" />
//       </div>
//     </section>
//   );
// }

// function KeyFeatures() {
//   const features = [
//     {
//       title: 'User Roles and Authentication',
//       description: 'Farmers/Producers and Consumers can register, login, and manage their profiles.',
//       logo: 'https://itnow.net/wp-content/uploads/2020/02/MFA.jpg' // Replace with actual logo URL
//     },
//     {
//       title: 'Product Listings',
//       description: 'Dynamic catalog displaying fresh produce with high-quality images.',
//       logo: 'https://tse4.mm.bing.net/th?id=OIP.IKevK9y5pvncFfT1cy0dAwAAAA&pid=Api&P=0&h=180' // Replace with actual logo URL
//     },
//     {
//       title: 'Geo-Based Marketplace',
//       description: 'Location-aware search for finding nearby farmers.',
//       logo: 'https://th.bing.com/th/id/OIP.rXIwhcLgblwxgJSY9jiirAHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Replace with actual logo URL
//     },
//     {
//       title: 'Real-Time Inventory Management',
//       description: 'Farmers can update stock dynamically.',
//       logo: 'https://th.bing.com/th/id/OIP.jHiiutsJy6X_QMDYoXDvVwHaD4?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Replace with actual logo URL
//     },
//     {
//       title: 'Shopping Cart and Orders',
//       description: 'Customizable cart and real-time order tracking.',
//       logo: 'https://th.bing.com/th/id/OIP.y2I-_5Gk1ejE6mW9LWoaNAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Replace with actual logo URL
//     },
//     {
//       title: 'Subscriptions and Pre-Orders',
//       description: 'Subscription models and pre-orders for seasonal produce.',
//       logo: 'https://th.bing.com/th?q=Pre-Order+Now+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' // Replace with actual logo URL
//     },
//     {
//       title: 'Community Features',
//       description: 'Consumer reviews and Q&A with farmers.',
//       logo: 'https://th.bing.com/th/id/OIP.EYxczq7sO3wtPpwXfQCB8QHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Replace with actual logo URL
//     },
//     {
//       title: 'Analytics and Insights',
//       description: 'Sales reports and customer preferences analytics.',
//       logo: 'https://th.bing.com/th/id/OIP.Fh_dnu_AC5xamckD9JY2QAHaEp?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Replace with actual logo URL
//     },
//     {
//       title: 'Secure Payment System',
//       description: 'Multiple payment methods and payment protection.',
//       logo: 'https://th.bing.com/th?q=Secure+Payment+Guaranteed+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' // Replace with actual logo URL
//     },
//     {
//       title: 'Delivery and Logistics',
//       description: 'Local delivery network and pickup locations.',
//       logo: 'https://farmyields.io/wp-content/uploads/2022/06/Frame-1000001896-min.png' // Replace with actual logo URL
//     }
//   ];

//   return (
//     <section className="key-features">
//       <h2>Key Features</h2>
//       <div className="features-list">
//         {features.map((feature, index) => (
//           <div key={index} className="feature">
//             <img src={feature.logo} alt={`${feature.title} Logo`} />
//             <h3>{feature.title}</h3>
//             <p>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default App;
