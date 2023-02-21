import Logo, { LogoType } from "./Logo";
import { Link } from "react-scroll";
import { NavPage } from "../../../types";

interface Props {
    logoHeight: string;
    linkSize: number;
}
export default function Footer({ logoHeight, linkSize }: Props) {
    return (
        <div
            className="d-flex py-3 w-100"
            style={{ backgroundColor: "#3f4f6c" }}
        >
            <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between w-100">
                <Link to={NavPage.HERO}>
                    <Logo logoType={LogoType.FILL} logoHeight={logoHeight} />
                </Link>
                <small
                    className="text-center text-uppercase text-primary mt-2 mt-sm-0"
                    style={{ fontSize: linkSize }}
                >
                    &copy; copyright 2014 all rights reserved
                </small>
            </div>
        </div>
    );
}
