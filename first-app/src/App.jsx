import React, {Fragment} from 'react'
import './App.css'
import MessageCard from './components/MessageCard'
import WishCard from './components/WishCard'

let App = () => {
  return (
    <Fragment>
    <nav className="navbar">
      <span>Welcome to App Component</span>
    </nav>
    <MessageCard/>
    <WishCard/>
   </Fragment>
  )
}

export default App;

