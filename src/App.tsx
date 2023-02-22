import { Cube, LingoEditor, World } from "lingo3d-react"
import "./App.css"

const App = () => {
  return (
    <World>
      <LingoEditor />
      <Cube />
    </World>
  )
}

export default App