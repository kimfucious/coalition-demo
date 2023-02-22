import { CarouselImage } from "../../../../types";

interface Props {
    elHeight: number;
    image: CarouselImage;
    setActive: (o: CarouselImage) => void;
}
export default function ThumbImage({ elHeight, image, setActive }: Props) {
    return (
        <img
            className="mx-1"
            data-bs-toggle="modal"
            data-bs-target="#image-modal"
            src={image.imageSrc}
            alt={image.altText}
            height={elHeight * 0.8}
            onClick={() => setActive(image)}
        />
    );
}
