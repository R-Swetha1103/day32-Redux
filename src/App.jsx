
import React, {useState} from 'react'
import CartCard from './components/CartCard'
import UserComponent from './utils/UserComponent'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserComponent>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserComponent>
  </>
}

export default App
