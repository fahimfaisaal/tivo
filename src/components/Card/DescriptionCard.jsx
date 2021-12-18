export default function DescriptionCard({ image, card }) {
    return (
        <div class="card">
            <div class="card-image">
                <img class="img-fluid" src={image.path} alt={image.alt} />
            </div>
            <div class="card-body">
                <h4 class="card-title">{card.heading}</h4>
                <p>{card.description}</p>
            </div>
        </div> 
    )
}
