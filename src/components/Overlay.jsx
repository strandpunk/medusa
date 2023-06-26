import { Scroll } from "@react-three/drei"


const Section = (props) => {
    return (

            <div>
                {props.children}
            </div>

    );
};

export const Overlay = () => {
    return (
        <Scroll html>
            <Section>
                <h1>Hello World F1</h1>
            </Section>
            <Section>
                <h1>Hello World F2</h1>
            </Section>
            <Section>
                <h1>Hello World F3</h1>
            </Section>
        </Scroll>
    )
}