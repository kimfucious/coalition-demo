import { NavPage, NavType } from "../../../types";
import NavLinkButton from "./NavLinkButton";

interface Props {
    linkSize: number;
    navbarOffset: number;
    navType: NavType;
    textColor: string;
}
export default function NavLinks({ linkSize, navbarOffset, navType, textColor }: Props) {
    return (
        <div className={`d-flex align-items-center`}>
            <NavLinkButton
                destination={NavPage.HISTORY}
                label="0.1 History"
                linkSize={linkSize}
                navbarOffset={navbarOffset}
                navType={navType}
                textColor={textColor}
            />
            <NavLinkButton
                destination={NavPage.TEAM}
                label="0.2 Team"
                linkSize={linkSize}
                navbarOffset={navbarOffset}
                navType={navType}
                textColor={textColor}
            />
        </div>
    );
}
