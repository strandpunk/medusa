import { Box, OrbitControls, ScrollControls } from "@react-three/drei"
import { Earth } from "./Earth"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={true} enableRotate={true} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
            <Earth />
            </ScrollControls>
        </>
    )
}