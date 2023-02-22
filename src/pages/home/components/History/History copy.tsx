import NavBar from "../../../../components/NavBar";
import { NavType } from "../../../../types";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface Props {
    bgColor?: string;
    heights: any;
    image: string;
    linkColor: string;
    linkSize: number;
    logoHeight: string;
    navbarOffset: number;
    navType: NavType;
    setHeights: (any: any) => void;
}
export default function History({
    bgColor,
    heights,
    image,
    linkColor,
    linkSize,
    logoHeight,
    navbarOffset,
    navType,
    setHeights,
}: Props) {
    return (
        <div
            className="container-fluid px-0 w-100"
            // style={{ backgroundImage: `url(${m1})`, height:"100vh", width: "100vw", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
            // style={{ position: "relative" }}
        >
            {/* <div className="w-100" style={{ position: "absolute", top: 0 }}> */}
            <NavBar
                bgColor={bgColor}
                heights={heights}
                linkColor={linkColor}
                linkSize={linkSize}
                logoHeight={logoHeight}
                navType={navType}
                navbarOffset={navbarOffset}
                setHeights={setHeights}
            />
            <img
                className="img-fluid"
                src={image}
                alt="Mountain"
                style={{ marginTop: navbarOffset }}
            />
            <ImageCarousel />
            {/* </div> */}
        </div>
    );
}
