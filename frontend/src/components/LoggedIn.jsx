import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Score from './score'
import Tests from './tests'
import Chatbot from './Chatbot'
import GoogleMaps from './googlemaps'
import Youtube from './Youtube'
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
        <Youtube></Youtube>
        <Footer></Footer>
    </div>
  )
}
