import HeaderNav from "../components/HeaderNav";
import Map from "../components/Map";
import PropertyCard from "../components/PropertyCard";
import { getProperties, ListProperty } from "@/app/lib/propertyService";

const Home= async () => {
  const propertiesList = await getProperties()
  
  return (
    <div className="container">
      <HeaderNav />
      <main>
        <article className="map">
          <Map/>
        </article>
        <article className="listings">
          <h2 className="text-3xl font-bold">Rental Listings</h2>
          <div className="card-container">
            {propertiesList.map((property: ListProperty) => <PropertyCard
              key={property.id}
              propertyName={property.name}
              slug={property.slug}
              pricePerNight={property.pricePerNight}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              image={property.listingPhotos[0]}
            />)}
          </div>
        </article>
      </main>
    </div>
  )
}

export default Home;