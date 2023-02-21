import { animateScroll as scroll, scroller } from "react-scroll";
import { Element } from "react-scroll";
import { NavPage, NavType } from "../../types";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import Footer from "./components/Footer";
import h1 from "../../assets/images/history_with_text_only.jpg";
import Hero from "./components/Hero";
import History from "./components/History";
import m3 from "../../assets/images/m3.jpg";
import Team from "./components/Team";

interface Props {
    navbarOffset: number;
    heights: any;
    setHeights: (any: any) => void;
}
export default function Home({ heights, setHeights, navbarOffset }: Props) {
    const { pageName } = useAppSelector((state) => state.app);
    const logoHeight = "28px";
    const linkSize = 10;

    useEffect(() => {
        if (pageName !== NavPage.HERO) {
            scroller.scrollTo(`${pageName}`, { offset: navbarOffset * -1 });
        } else {
            scroll.scrollToTop({ delay: 0, duration: 0, smooth: true });
        }
    }, [pageName, navbarOffset]);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {pageName === NavPage.HERO && (
                <Element className="w-100" name={NavPage.HERO}>
                    <Hero
                        heights={heights}
                        linkColor="light"
                        linkSize={linkSize}
                        logoHeight={logoHeight}
                        navbarOffset={navbarOffset}
                        navType={NavType.NAVIGATE}
                        setHeights={setHeights}
                    />
                </Element>
            )}
            {(pageName === NavPage.HISTORY || pageName === NavPage.TEAM) && (
                <div>
                    <Element name={NavPage.HISTORY}>
                        <History
                            bgColor={"light"}
                            heights={heights}
                            image={h1}
                            linkColor={"dark"}
                            linkSize={linkSize}
                            logoHeight={logoHeight}
                            navbarOffset={navbarOffset}
                            navType={NavType.SLIDE}
                            setHeights={setHeights}
                        />
                    </Element>
                    <Element name={NavPage.TEAM}>
                        <Team
                            bgColor={"light"}
                            heights={heights}
                            image={m3}
                            linkColor={"dark"}
                            linkSize={linkSize}
                            logoHeight={logoHeight}
                            navType={NavType.SLIDE}
                            setHeights={setHeights}
                        />
                    </Element>
                </div>
            )}
            <Footer logoHeight={logoHeight} linkSize={linkSize} />
        </div>
    );
}
