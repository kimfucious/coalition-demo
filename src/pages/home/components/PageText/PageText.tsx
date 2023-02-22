import BigNumber from "./BigNumber";
interface Props {
    pageNumber: string;
    titleText: string
}
export default function PageText({ pageNumber, titleText }: Props) {
    return (
        <div className="container d-flex w-100 py-4">
            <BigNumber pageNumber={pageNumber} titleText={titleText} />
        </div>
    );
}
