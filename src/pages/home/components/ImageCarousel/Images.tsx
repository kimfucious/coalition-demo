import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Divide } from "tabler-icons-react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { CarouselImage, CarouselSlideDirection } from "../../../../types";
import ThumbImage from "./ThumbImage";
interface Props {
    elHeight: number;
    images: CarouselImage[];
    setActive: (o: CarouselImage) => void;
}
export default function Images({ elHeight, images, setActive }: Props) {
    const [thumbs, setThumbs] = useState(images);
    const [, width] = useWindowSize();
    const isSmall = useMemo(() => {
        return width < 405;
    }, [width]);
    function renderThumbs() {
        const maxLength = isSmall ? 2 : 3;
        // eslint-disable-next-line array-callback-return
        return thumbs.map((thumb, idx) => {
            if (idx <= maxLength) {
                return (
                    <ThumbImage
                        key={idx}
                        elHeight={elHeight}
                        image={thumb}
                        setActive={setActive}
                    />
                );
            }
        });
    }
    function handleSlide(dir: CarouselSlideDirection) {
        let updated = [...thumbs];
        if (dir === CarouselSlideDirection.NEXT) {
            const first = updated.shift();
            if (first) {
                updated.push(first);
                setThumbs(updated);
            }
        } else {
            const last = updated.pop();
            if (last) {
                updated.unshift(last);
                setThumbs(updated);
            }
        }
    }
    return (
        <div
            className="d-flex align-items-center justify-content-center w-100"
            style={{ maxHeight: elHeight }}
        >
            {isSmall && (
                <button
                    className="btn btn-link text-decoration-none text-white px-0 me-1"
                    onClick={() => handleSlide(CarouselSlideDirection.NEXT)}
                >
                    <ChevronLeft />
                </button>
            )}
            {renderThumbs()}
            {isSmall && (
                <button
                    className="btn btn-link text-decoration-none text-white px-0 ms-1"
                    onClick={() => handleSlide(CarouselSlideDirection.NEXT)}
                >
                    <ChevronRight />
                </button>
            )}
        </div>
    );
}
