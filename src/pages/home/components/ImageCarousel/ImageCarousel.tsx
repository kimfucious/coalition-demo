// import bg from "../../../../assets/images/history_bottom_mask.jpg";
import { useMemo, useRef, useState } from "react";
import Images from "./Images";
import useSize from "@react-hook/size";
// import Dots from "./Dots";
import ImageModal from "./ImageModal";
import thumb1 from "../../../../assets/images/carousel_thumb_1.jpg";
import thumb2 from "../../../../assets/images/carousel_thumb_2.jpg";
import { CarouselImage } from "../../../../types";
const images = [
    { id: 0, imageSrc: thumb1, altText: "Man on ledge" },
    { id: 1, imageSrc: thumb2, altText: "Misty Mountains" },
    { id: 2, imageSrc: thumb1, altText: "Man on ledge" },
    { id: 3, imageSrc: thumb2, altText: "Misty Mountains" },
];
export default function ImageCarousel() {
    const target = useRef(null);
    const [, height] = useSize(target);
    const [active, setActive] = useState<CarouselImage>({
        id: 0,
        imageSrc: thumb1,
        altText: "Man on ledge",
    });
    const { image, altText } = useMemo(() => {
        return { image: active.imageSrc, altText: active.altText };
    }, [active]);
    return (
        <>
            <div
                className="d-flex justify-content-center w-100"
                style={{ backgroundColor: "rgba(25,31,42,0.75)" }}
                // opacity affects everything here
                // style={{ backgroundColor: "#404f6c", opacity: 0.5 }}
            >
                <div className="py-2" ref={target}>
                    <Images
                        setActive={setActive}
                        elHeight={height}
                        images={images}
                    />
                    {/* <Dots active={active} /> */}
                </div>
            </div>
            <ImageModal imageSrc={image} altText={altText} />
        </>
    );
}
