import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {

    if(!localStorage.getItem("username")) return <LoginForm />
    return (
        <ChatEngine
             height="100vh"
             projectID="424a4736-ce80-4a29-94e0-658afe179066"
             userName={localStorage.getItem("username")}
             userSecret={localStorage.getItem("password")}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}   
        />     
    )
}

export default App;
