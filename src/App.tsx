import { Cube, World } from 'lingo3d-react'
import './App.css'

function App() {

  return (
    <World>
      <Cube animation={{ rotationY: [0, 180, 360] }} />
    </World>
  )
}

export default App
