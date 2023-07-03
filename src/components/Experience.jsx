import { Box, OrbitControls, ScrollControls } from "@react-three/drei"
import { Moon } from "./Moon"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0} />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
            <Moon />
            </ScrollControls>
        </>
    )
}