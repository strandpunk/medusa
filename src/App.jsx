import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {


  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas camera={{
      fov: 64,
      position: [2, 2, -2]
    }}>
      <Experience />
    </Canvas>
    </div>
  )
}

export default App
