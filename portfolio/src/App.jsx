import Home from "./Components/Home"
import user from "./Data/user.json"
function App() {

  return (
    <>
     <Home data={user}/>
    </>
  )
}

export default App
