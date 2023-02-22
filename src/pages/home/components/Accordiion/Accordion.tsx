import { NavPage, NavType } from "../../../../types";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import Collapse from "react-bootstrap/Collapse";
import History from "../History";
import NavBar from "../../../../components/NavBar";
import Team from "../Team";

interface Props {
    bgColor?: string;
    heights: any;
    historyImage: string;
    teamImage: string;
    linkColor: string;
    linkSize: number;
    logoHeight: string;
    navbarOffset: number;
    navType: NavType;
    setHeights: (any: any) => void;
    totalOffset: number
}
export default function Accordion({
    bgColor,
    heights,
    historyImage,
    teamImage,
    linkColor,
    linkSize,
    logoHeight,
    navbarOffset,
    navType,
    setHeights,
    totalOffset
}: Props) {
    const { pageName } = useAppSelector((state) => state.app);
    return (
        <div className="d-flex flex-column w-100" id="accordion-container">
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
            <div style={{ marginTop: navbarOffset }}>
                <Collapse in={pageName === NavPage.HISTORY}>
                     <div id="history">
                         <History image={historyImage} totalOffset={totalOffset} />
                     </div>
                 </Collapse>
                 <Collapse in={pageName === NavPage.TEAM}>
                     <div id="team">
                         <Team image={teamImage} />
                     </div>
                 </Collapse>
            </div>
        </div>
    );
}
