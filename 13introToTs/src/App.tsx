import './App.css'
import MyButton from "./components/Button";

function App() {

  return (
    <>
      <MyButton text='Click Me' /> <br /><br />
      <MyButton onClick={()=> alert('Login Successful')} text='Login' />
    </>
  )
}

export default App
