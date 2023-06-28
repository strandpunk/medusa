import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import "./Overlay.css"

const Section = (props) => {
    return (
        <section style={{ opacity: props.opacity }}>
            <div className="cards-wrapper">
                {props.children}
            </div>
        </section>
    );
};



export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(scroll.curve(1 / 4, 1.8 / 4));
        setOpacitySecondSection(scroll.curve(2 / 4, 1.8 / 4));
        setOpacityThirdSection(scroll.curve(3 / 4, 1.8 / 4));
    });

    return (
        <Scroll html>
            <div className="header">
                Почему Луна одинока?
            </div>
            <div className="earth-wrapper">

            </div>
            <Section opacity={opacityFirstSection}>
                Top
            </Section>
            <Section opacity={opacitySecondSection}>
                Mid
            </Section>
            <Section opacity={opacityThirdSection}>
                Bot
            </Section>
            <div className="footer">
                Footer
            </div>
        </Scroll>
    )
}