import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {


  return (
    <Canvas camera={{
      fov: 64,
      position: [0, -3, 0],
    }}>
      <Experience />
    </Canvas>
  )
}

export default App
