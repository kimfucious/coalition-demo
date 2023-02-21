import thumb1 from "../../../../assets/images/carousel_thumb_1.jpg";
import thumb2 from "../../../../assets/images/carousel_thumb_2.jpg";
import ThumbImage from "./ThumbImage";
interface Props {
    elHeight: number;
    setActive: (n: number) => void;
}
export default function Images({  elHeight, setActive }: Props) {
    return (
        <div
            className="d-flex align-items-center justify-content-center w-100"
            style={{ maxHeight: elHeight }}
        >
            <ThumbImage
                idx={0}
                altText="Man on ledge"
                elHeight={elHeight}
                imageSrc={thumb1}
                setActive={setActive}
            />
            <ThumbImage
                idx={1}
                altText="MistyMountains"
                elHeight={elHeight}
                imageSrc={thumb2}
                setActive={setActive}
            />
            <ThumbImage
                idx={2}
                altText="Man on ledge"
                elHeight={elHeight}
                imageSrc={thumb1}
                setActive={setActive}
            />
            <ThumbImage
                idx={3}
                altText="MistyMountains"
                imageSrc={thumb2}
                elHeight={elHeight}
                setActive={setActive}
            />
        </div>
    );
}
