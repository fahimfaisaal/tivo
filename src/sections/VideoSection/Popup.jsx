export default function Popup({ videoLink, videoToggleHandler }) {
    return (
        <div className="mfp-container mfp-iframe-holder">
            <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                    <button onClick={videoToggleHandler} title="Close (Esc)" type="button" className="mfp-close">×</button>
                    <iframe title="youtube" className="mfp-iframe" src={videoLink} frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    )
}
