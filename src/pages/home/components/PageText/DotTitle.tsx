interface Props {
    titleText: string
}
export default function DotTitle({titleText}: Props) {
    return (
        <div className="d-flex flex-column align-items-end">
            <div className="big-number-title">{titleText}</div>
            <div className="big-number">.</div>
        </div>
    );
}
