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
        setOpacityFirstSection(scroll.curve(0.5 / 4, 2 / 4));
        setOpacitySecondSection(scroll.curve(1.5 / 4, 2.5 / 4,));
        setOpacityThirdSection(scroll.range(3 / 4, 1 / 4));
    });

    return (
        <Scroll html>
            <div className="header">
                MOON
            </div>

            <div className="moon-wrapper">

            </div>
            <Section opacity={opacityFirstSection}>
                <div className="card">
                    <h2>Near side of the Moon</h2>
                    <p>The near side of the Moon is the lunar hemisphere that always faces towards Earth, opposite to the far side.
                        Only one side of the Moon is visible from Earth because the Moon rotates on its axis at the same rate that the
                        Moon orbits the Earth—a situation known as tidal locking. <br></br> <br></br>

                        The Moon is directly illuminated by the Sun, and the cyclically varying viewing conditions cause the lunar phases.
                        Sometimes the dark portion of the Moon is faintly visible due to earthshine, which is indirect sunlight
                        reflected from the surface of Earth and onto the Moon. <br></br> <br></br>

                        Since the Moon's orbit is both somewhat elliptical and inclined to its equatorial plane,
                        libration allows up to 59% of the Moon's surface to be viewed from Earth (though only half at any moment from any point).</p>
                </div>
            </Section>
            <Section opacity={opacitySecondSection}>
                <div id="right" className="card">
                    <h2>Far side of the Moon</h2>
                    <p>The far side of the Moon is the lunar hemisphere that always faces away from Earth, opposite to the near side,
                        because of synchronous rotation in the Moon's orbit. Compared to the near side, the far side's terrain is rugged,
                        with a multitude of impact craters and relatively few flat and dark lunar maria ("seas"), giving it an appearance
                        closer to other barren places in the Solar System such as Mercury and Callisto. It has one of the largest craters in the Solar System,
                        the South Pole–Aitken basin. The hemisphere has sometimes been called the "dark side of the Moon", where "dark" means "unknown" instead of
                        "lacking sunlight" – each side of the Moon experiences two weeks of sunlight while the opposite side experiences two weeks of night.</p>
                </div>
            </Section>
            <Section opacity={opacityThirdSection}>
                <div className="card">
                    <h2>History</h2>
                    <p>Both the Moon's prominence in Earth's sky and its regular cycle of phases have provided cultural references
                        and influences for human societies throughout history. Such influences can be found in language, calendar systems,
                        art, and mythology. <br></br> <br></br>
                        The first artificial object to reach the Moon was the Soviet Union's uncrewed Luna 2 spacecraft
                        in 1959; this was followed by the first successful soft landing by Luna 9 in 1966. <br></br> <br></br>
                        The only human lunar missions to date have been those of the United States' Apollo program, which landed twelve men on the surface
                        between 1969 and 1972. These and later uncrewed missions returned lunar rocks that have been used to develop a detailed
                        geological understanding of the Moon's origins, internal structure, and subsequent history. The Moon is the only celestial body visited by humans.</p>
                </div>
            </Section>
            {/* <div className="footer">
                Footer
            </div> */}
        </Scroll>
    )
}