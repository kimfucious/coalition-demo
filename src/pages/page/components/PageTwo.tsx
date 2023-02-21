interface Props {
    navbarOffset: number;
}
export default function PageTwo({ navbarOffset }: Props) {
    return (
        <div
            className="d-flex align-items-center justify-content-center py-5"
            style={{ marginTop: navbarOffset }}
        >
            <h1>Page Two</h1>
        </div>
    );
}
