import "./App.css"
import { Cube, World } from "lingo3d-react"

const App = () => {
  return (
    <World>
      <Cube animation={{ rotationY: [0, 360] }} />
    </World>
  )
}

export default App