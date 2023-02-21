interface Props {
    idx: number;
    altText: string;
    elHeight: number;
    imageSrc: string;
    setActive: (n: number) => void;
}
export default function ThumbImage({
    idx,
    altText,
    elHeight,
    imageSrc,
    setActive,
}: Props) {
    return (
        <img
            className="mx-1"
            data-bs-toggle="modal"
            data-bs-target="#image-modal"
            src={imageSrc}
            alt={altText}
            height={elHeight * 0.8}
            onClick={() => setActive(idx)}
        />
    );
}
