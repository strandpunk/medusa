import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Lp } from "./Lp"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
            <Lp />
            </ScrollControls>
        </>
    )
}