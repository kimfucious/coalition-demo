import { useMemo } from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface Props {
    image: string;
    totalOffset?: number;
}
export default function History({ image, totalOffset }: Props) {
    console.log("total offset", totalOffset);
    const [viewportHeight] = useWindowSize();
    const height = useMemo(() => {
        if (totalOffset) {
            return viewportHeight - totalOffset;
        } else {
            return "100vh";
        }
    }, [totalOffset, viewportHeight]);
    return (
        <div id="history-container">
            <div
                className="d-flex d-sm-none w-100"
                // className="d-flex d-sm-none w-100 vh-100"
                id="history-small"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/h1_small.jpg)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    // height: "100vh"
                    height,
                }}
            >
                <div
                    className="w-100"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <ImageCarousel />
                </div>
            </div>
            <div
                className="d-none d-sm-flex flex-column px-0 w-100"
                style={{ position: "relative" }}
            >
                <img className="img-fluid" src={image} alt="Mountain" />
                <div
                    className="w-100"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <ImageCarousel />
                </div>
            </div>
        </div>
    );
}
