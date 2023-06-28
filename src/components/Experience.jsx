import { Box, OrbitControls, ScrollControls } from "@react-three/drei"
import { Moon } from "./Moon"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ScrollControls pages={3.2} damping={0.25}>
                <Overlay />
            <Moon />
            </ScrollControls>
        </>
    )
}