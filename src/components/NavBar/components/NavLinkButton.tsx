import { useAppDispatch } from "../../../hooks/reduxHooks";
import { ActionType, NavPage, NavType } from "../../../types";
import { Link } from "react-scroll";

interface Props {
    textColor: string;
    label: string;
    linkSize: number;
    navbarOffset: number;
    navType: NavType;
    destination: NavPage;
}
export default function NavLinkButton({
    destination,
    label,
    linkSize,
    navbarOffset,
    navType,
    textColor,
}: Props) {
    const dispatch = useAppDispatch();
    function handlePageChange(page: NavPage) {
        dispatch({ type: ActionType.UPDATE_PAGE, payload: page });
    }
    return (
        <div>
            {(navType === NavType.COLLAPSE || navType === NavType.NAVIGATE) && (
                <div
                    className={`btn btn-link btn-sm fw-bold text-${textColor} text-decoration-underline text-uppercase`}
                    style={{ textUnderlineOffset: "3px" }}
                    onClick={() => handlePageChange(destination)}
                >
                    <span style={{ fontSize: linkSize }}>{label}</span>
                </div>
            )}
            {navType === NavType.SCROLL && (
                <Link
                    className={`btn btn-link btn-sm fw-bold text-${textColor} text-decoration-underline text-uppercase`}
                    to={destination}
                    offset={navbarOffset * -1}
                    style={{ textUnderlineOffset: "3px" }}
                >
                    <span style={{ fontSize: linkSize }}>{label}</span>
                </Link>
            )}
            {/* {navType === NavType.COLLAPSE && (
                <div
                    className={`btn btn-link btn-sm fw-bold text-${textColor} text-decoration-underline text-uppercase`}
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${destination}`}
                    style={{ textUnderlineOffset: "3px" }}
                >
                    <span style={{ fontSize: linkSize }}>{label}</span>
                </div>
            )} */}
        </div>
    );
}
