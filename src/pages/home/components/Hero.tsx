import { useMemo } from "react";
import NavBar from "../../../components/NavBar";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { NavPage, NavType } from "../../../types";

interface Props {
    bgColor?: string;
    heights: any;
    linkColor: string;
    linkSize: number;
    logoHeight: string;
    navbarOffset: number;
    navType: NavType;
    setHeights: (any: any) => void;
}
export default function Hero({
    bgColor,
    heights,
    linkColor,
    linkSize,
    logoHeight,
    navbarOffset,
    navType,
    setHeights,
}: Props) {
    const [, width] = useWindowSize();
    const imageURL = useMemo(() => {
        const baseURL = process.env.PUBLIC_URL;
        if (width < 576) {
            return `${baseURL}/m1-small.jpg`;
        } else {
            return `${baseURL}/m1.jpg`;
        }
    }, [width]);
    return (
        <>
            <div
                className="d-flex w-100 vh-100"
                style={{
                    backgroundImage: `url(${imageURL})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-100">
                    <NavBar
                        bgColor={bgColor}
                        forPage={NavPage.HERO}
                        heights={heights}
                        linkColor={linkColor}
                        linkSize={linkSize}
                        logoHeight={logoHeight}
                        navbarOffset={navbarOffset}
                        navType={navType}
                        setHeights={setHeights}
                    />
                </div>
            </div>
            {/* Prolly don't need this anymore */}
            {/* <div
                className="container-fluid d-none d-sm-flex px-0 w-100"
                style={{ position: "relative" }}
            >
                <img className="img-fluid" src={image} alt="Mountain" />
                <div className="w-100" style={{ position: "absolute", top: 0 }}>
                    <NavBar
                        bgColor={bgColor}
                        forPage={NavPage.HERO}
                        heights={heights}
                        linkColor={linkColor}
                        linkSize={linkSize}
                        logoHeight={logoHeight}
                        navbarOffset={navbarOffset}
                        navType={navType}
                        setHeights={setHeights}
                    />
                </div>
            </div> */}
        </>
    );
}
