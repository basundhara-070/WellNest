import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Score from './score'
import Tests from './tests'
import Chatbot from './Chatbot'
import GoogleMaps from './googlemaps'
import Footer from './Footer'
export default function LoggedIn() {
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <Score></Score>
        <Tests></Tests>
        <Chatbot></Chatbot>
        <GoogleMaps></GoogleMaps>
        <Footer></Footer>
    </div>
  )
}
