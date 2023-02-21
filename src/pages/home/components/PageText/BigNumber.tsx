import DotTitle from "./DotTitle";

interface Props {
    pageNumber: string;
    titleText: string
}
export default function BigNumber({ pageNumber, titleText }: Props) {
    return (
        <div className="d-flex flex-row align-items-end">
            <div className="big-number">{pageNumber}</div>
            <DotTitle titleText={titleText} />
        </div>
    );
}
