import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
  const card_elements = cardData.map((item, index) => {
    
    return (
      <Card
        key={item.id}
        isTheLast={index===cardData.length-1?"true":"false"}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="card-list">
        {card_elements}
      </section>
    </div>
  )
}