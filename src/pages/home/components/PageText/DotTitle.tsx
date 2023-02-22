interface Props {
    titleText: string;
}
export default function DotTitle({ titleText }: Props) {
    return (
        <div className="d-flex flex-column justify-content-end">
            <div
                className="big-number-title text-secondary text-uppercase"
                style={{ lineHeight: "5px" }}
            >
                {titleText}
            </div>
            <div className="big-number" style={{ lineHeight: "24px" }}>
                .
            </div>
        </div>
    );
}
