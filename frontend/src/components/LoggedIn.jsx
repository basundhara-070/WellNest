import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import TodoList from './TodoList'
import Score from './Score'
import Tests from './Tests'
import Chatbot from './Chatbot'
import GoogleMaps from './GoogleMaps'
import Youtube from './Youtube'
import Footer from './Footer'
import Dashboard from './Dashboard'
export default function LoggedIn() {
  return (
    <div>
        <Navbar></Navbar>

        <Home></Home>
        <Chatbot></Chatbot>
        <Dashboard></Dashboard>
        <Tests></Tests>
        <Score></Score>
        <TodoList></TodoList>
        <GoogleMaps></GoogleMaps>
        {/* <Youtube></Youtube> */}
        <Footer></Footer>
        
    </div>
  )
}
