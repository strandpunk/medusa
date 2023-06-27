import { Scroll } from "@react-three/drei"
import "./Overlay.css"

const Section = (props) => {
    return (
    <section>
        <div className="cards-wrapper">
            {props.children}
        </div>
    </section>
    );
};

export const Overlay = () => {
    return (
        <Scroll html>
            <div className="header">
                Earth
            </div>
            <div className="earth-wrapper">

            </div>
            <Section>
                Top
            </Section>
            <Section>
                Mid
            </Section>
            <Section>
                Bot
            </Section>
        </Scroll>
    )
}