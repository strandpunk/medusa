import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {


  return (
    <Canvas camera={{
      fov: 64,
      position: [2, 2, -2]
    }}>
      <Experience />
    </Canvas>
  )
}

export default App
