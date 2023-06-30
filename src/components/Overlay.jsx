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
                ЛУНА
            </div>

            <div className="moon-wrapper">

            </div>
            <Section opacity={opacityFirstSection}>
                <h2>Светлая сторона</h2>
                <p>Из-за того, что период вращения вокруг Земли и период вращения вокруг своей оси у Луны совпадают,
                    с Земли можно наблюдать только одно полушарие Луны. Причина этой синхронизации — действие приливных
                    сил от Земли на неоднородности распределения массы на Луне.</p>
            </Section>
            <Section opacity={opacitySecondSection}>
                <h2>Обратная сторона</h2>
                <p>Впервые обратная сторона Луны была сфотографирована советской АМС «Луна-3» 7 октября 1959 года.
                    Приём сигнала осуществляли в Симеизской обсерватории в Крыму. В массовой печати впервые изображение обратной стороны Луны,
                    полученное АМС «Луна-3», появилось 27 октября 1959 года, оно было опубликовано в газете «Правда» и в других советских изданиях.</p>
            </Section>
            <Section opacity={opacityThirdSection}>
                <h2>История</h2>
                <p>Луна появилась около 4,5 млрд лет назад, немного позже Земли. Наиболее популярна гипотеза о том, что Луна сформировалась из осколков, 
                    оставшихся после «Гигантского столкновения» Земли и Тейи — планеты, схожей по размерам с Марсом.<br></br><br></br>
                    На сегодняшний день Луна является единственным внеземным астрономическим объектом, на котором побывал человек.</p>
            </Section>
            {/* <div className="footer">
                Footer
            </div> */}
        </Scroll>
    )
}