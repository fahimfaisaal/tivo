export default function VideoThumbnail({ imagePath, videoLink }) {
    return (
        <div className="image-container">
            <div className="video-wrapper">
                <a className="popup-youtube" href={videoLink} data-effect="fadeIn">
                    <img className="img-fluid" src={imagePath} alt="website template" />
                    <span className="video-play-button">
                        <span></span>
                    </span>
                </a>
            </div>
        </div>
    )
}
