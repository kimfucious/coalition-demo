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
import Accordion from "./components/Accordiion/Accordion";
import NavBar from "../../components/NavBar";

interface Props {
    navbarOffset: number;
    heights: any;
    setHeights: (any: any) => void;
    totalOffset: number;
}
export default function Home({
    heights,
    setHeights,
    navbarOffset,
    totalOffset,
}: Props) {
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
                        totalOffset={totalOffset}
                    />
                </Element>
            )}
            {(pageName === NavPage.HISTORY || pageName === NavPage.TEAM) && (
                <div className="d-flex w-100" id="history-team-container">
                    <div
                        className="d-flex d-sm-none w-100"
                        id="history-small-break"
                    >
                        <Accordion
                            bgColor={"light"}
                            heights={heights}
                            historyImage={h1}
                            teamImage={m3}
                            linkColor={"dark"}
                            linkSize={linkSize}
                            logoHeight={logoHeight}
                            navbarOffset={navbarOffset}
                            navType={NavType.COLLAPSE}
                            setHeights={setHeights}
                            totalOffset={totalOffset}
                        />
                    </div>
                    <div className="d-none d-sm-flex flex-column">
                        <NavBar
                            bgColor={"light"}
                            heights={heights}
                            linkColor={"dark"}
                            linkSize={linkSize}
                            logoHeight={logoHeight}
                            navbarOffset={navbarOffset}
                            navType={NavType.SCROLL}
                            setHeights={setHeights}
                        />
                        <Element
                            name={NavPage.HISTORY}
                            style={{ marginTop: navbarOffset }}
                        >
                            <History image={h1} />
                        </Element>
                        <Element name={NavPage.TEAM}>
                            <Team image={m3} />
                        </Element>
                    </div>
                </div>
            )}
            <Footer
                heights={heights}
                setHeights={setHeights}
                logoHeight={logoHeight}
                linkSize={linkSize}
            />
        </div>
    );
}
