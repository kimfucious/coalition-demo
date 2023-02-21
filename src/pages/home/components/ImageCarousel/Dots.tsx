interface Props {
    active: number;
}
export default function Dots({ active }: Props) {
    return (
        <div className="d-flex align-items-start justify-content-center w-100">
            <span
                className={`text-${active === 0 ? "white" : "primary"}`}
                style={{ fontSize: 24 }}
            >
                •
            </span>
            <span
                className={`text-${active === 1 ? "white" : "primary"}`}
                style={{ fontSize: 24 }}
            >
                •
            </span>
            <span
                className={`text-${active === 2 ? "white" : "primary"}`}
                style={{ fontSize: 24 }}
            >
                •
            </span>
            <span
                className={`text-${active === 3 ? "white" : "primary"}`}
                style={{ fontSize: 24 }}
            >
                •
            </span>
        </div>
    );
}
