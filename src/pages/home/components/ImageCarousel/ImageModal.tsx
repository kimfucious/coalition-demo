interface Props {
    altText: string;
    imageSrc: string;
}
export default function ImageModal({ altText, imageSrc }: Props) {
    return (
        <div className="modal fade" id="image-modal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/* <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div> */}
                    <div
                        className="d-flex align-items-center justify-content-center modal-body p-0 m-0"
                        style={{
                            height: "auto",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                            }}
                        >
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <img
                            className=""
                            src={imageSrc}
                            alt={altText}
                            height="auto"
                            width="100%"
                        />
                    </div>
                    {/* <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
