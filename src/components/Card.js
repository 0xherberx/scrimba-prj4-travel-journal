import location_icon from "../location_icon.png"

export default function Card(props) {
    console.log(props);

    return (
        <div className="card-container">
            <div className="card">
                <img src={props.imageUrl} alt="location_img"></img>
                <section className="card--r_section">
                    <div className="card--location">
                        <img src={location_icon} alt="location_icon"></img>
                        <span>{props.location}</span>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <span className="card--travel_dates">{props.startDate} - {props.endDate}</span>
                    <p className="card--travel_desc">
                        {props.description}
                    </p>
                </section>
            </div>
            {props.isTheLast==="false" && <hr class="solid"></hr>}
        </div>
    )
}