import Logo, { LogoType } from "./Logo";
import { Link } from "react-scroll";
import { ElHeight, ElName, NavPage } from "../../../types";
import { useEffect, useRef } from "react";
import useSize from "@react-hook/size";

interface Props {
    heights: ElHeight[];
    logoHeight: string;
    linkSize: number;
    setHeights: (a: ElHeight[]) => void;
}
export default function Footer({
    heights,
    logoHeight,
    linkSize,
    setHeights,
}: Props) {
    const target = useRef(null);
    const [, height] = useSize(target);
    useEffect(() => {
        if (height === 0) return; // prevents display-none elements from causing loop
        const newHeights = [...heights];
        const idx = newHeights.findIndex((item) => item.name === ElName.FOOTER);
        if (idx !== -1) {
            const navBarHeight = newHeights[idx].height;
            if (navBarHeight !== height) {
                newHeights[idx].height = height;
                setHeights(newHeights);
            }
        } else {
            setHeights([
                ...newHeights,
                { name: ElName.FOOTER, height: height },
            ]);
        }
    }, [height, heights, setHeights]);
    return (
        <div
            className="d-flex py-3 w-100"
            ref={target}
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
