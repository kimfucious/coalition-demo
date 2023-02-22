import { ActionType, ElHeight, ElName, NavPage, NavType } from "../../types";
import { useEffect, useRef } from "react";
import useSize from "@react-hook/size";
import logo from "../../assets/images/logo_icon_white.png";
import logoWithText from "../../assets/images/logo.png";
import NavLinks from "./components/NavLinks";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Link } from "react-scroll";

interface Props {
    bgColor?: string;
    forPage?: NavPage;
    heights: ElHeight[];
    linkColor: string;
    linkSize: number;
    logoHeight: string;
    navbarOffset: number;
    navType: NavType;
    setHeights: (a: ElHeight[]) => void;
}

export default function NavBar({
    bgColor,
    heights,
    forPage,
    linkColor,
    linkSize,
    logoHeight,
    navbarOffset,
    navType,
    setHeights,
}: Props) {
    const target = useRef(null);
    const [, height] = useSize(target);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (height === 0) return; // prevents display-none elements from causing loop
        const newHeights = [...heights];
        const idx = newHeights.findIndex((item) => item.name === ElName.NAVBAR);
        if (idx !== -1) {
            const navBarHeight = newHeights[idx].height;
            if (navBarHeight !== height) {
                newHeights[idx].height = height;
                setHeights(newHeights);
            }
        } else {
            setHeights([
                ...newHeights,
                { name: ElName.NAVBAR, height: height },
            ]);
        }
    }, [height, heights, setHeights]);

    return (
        <nav
            ref={target}
            className={`navbar w-100 ${
                forPage !== NavPage.HERO && "fixed-top"
            } ${bgColor && "bg-" + bgColor}`}
        >
            <div
                className={`container d-flex align-items-center justify-content-between w-100`}
            >
                <Link to={NavPage.HERO}>
                    <div
                        className="navbar-brand"
                        onClick={() =>
                            dispatch({
                                type: ActionType.UPDATE_PAGE,
                                payload: NavPage.HERO,
                            })
                        }
                        style={{ cursor: "pointer" }}
                    >
                        {forPage === NavPage.HERO ? (
                            <img
                                src={logo}
                                height={logoHeight}
                                width="auto"
                                alt="Los Angeles Mountains Logo"
                            />
                        ) : (
                            <img
                                src={logoWithText}
                                height={logoHeight}
                                width="auto"
                                alt="Los Angeles Mountains Logo"
                            />
                        )}
                    </div>
                </Link>
                <NavLinks
                    linkSize={linkSize}
                    textColor={linkColor}
                    navbarOffset={navbarOffset}
                    navType={navType}
                />
            </div>
        </nav>
    );
}
