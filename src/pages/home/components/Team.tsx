// import NavBar from "../../../components/NavBar";
import { NavType } from "../../../types";
import ClimbText from "./ClimbText";
import Tabs from "./Tabs";

interface Props {
    bgColor?: string;
    heights: any;
    image: string;
    linkColor: string;
    linkSize: number;
    logoHeight: string;
    navType: NavType;
    setHeights: (any: any) => void;
}
export default function Team({
    bgColor,
    heights,
    image,
    linkColor,
    linkSize,
    logoHeight,
    navType,
    setHeights,
}: Props) {
    return (
        <div className="container-fluid px-0 w-100">
            {/* <NavBar
                bgColor={bgColor}
                heights={heights}
                linkColor={linkColor}
                linkSize={linkSize}
                logoHeight={logoHeight}
                setHeights={setHeights}
            /> */}
                <ClimbText />
            <Tabs />
            <img className="img-fluid" src={image} alt="Mountain" />
        </div>
    );
}
