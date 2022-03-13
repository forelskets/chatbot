import React, { useState } from 'react'
import Chatbot from './components/chatbot/Chatbot'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import './App.css'


const App = () => {
  return (
    <Router>


      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/" component={Chatbot} exact />
          </div>


        </Container>
      </main>

    </Router>
  )
}

export default App
