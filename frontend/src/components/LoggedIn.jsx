import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import TodoList from './TodoList'
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
        <Chatbot></Chatbot>
        <Tests></Tests>
        <Score></Score>
        <TodoList></TodoList>
        <GoogleMaps></GoogleMaps>
        <Youtube></Youtube>
        <Footer></Footer>
        
    </div>
  )
}
