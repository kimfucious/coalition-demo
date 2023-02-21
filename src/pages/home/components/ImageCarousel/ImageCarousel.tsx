import bg from "../../../../assets/images/history_bottom_mask.jpg";
import { useMemo, useRef, useState } from "react";
import Images from "./Images";
import useSize from "@react-hook/size";
// import Dots from "./Dots";
import ImageModal from "./ImageModal";
import thumb1 from "../../../../assets/images/carousel_thumb_1.jpg";
import thumb2 from "../../../../assets/images/carousel_thumb_2.jpg";
export default function ImageCarousel() {
    const target = useRef(null);
    const [, height] = useSize(target);
    const [active, setActive] = useState<number>(0);
    const {image, altText} = useMemo(()=>{
        let image
        let altText
        if(active % 2 === 0) {
            image = thumb1
            altText = "Man on a Ledge"
        } else {
            image = thumb2
            altText = "Misty Mountains"
        }
        return {image,altText}
    },[active])
    return (
<>
        <div className="d-flex" style={{ position: "relative" }}>
            <img className="img-fluid" src={bg} alt="layer mask" />
            <div
                className="py-2"
                ref={target}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <Images
                    setActive={setActive}
                    elHeight={height}
                />
                {/* <Dots active={active} /> */}
            </div>
        </div>
        <ImageModal imageSrc={image} altText={altText}/>
</>
    );
}
