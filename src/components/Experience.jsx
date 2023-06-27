import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Lp } from "./Lp"
import { Overlay } from "./Overlay"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
            <Lp />
            </ScrollControls>
        </>
    )
}