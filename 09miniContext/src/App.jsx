import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className="h-screen flex align-middle items-center flex-col justify-center gap-5">
      <Login/>
      <Profile/></div>
    </UserContextProvider>
  )
}

export default App
