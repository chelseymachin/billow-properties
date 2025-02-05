import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Card from "./components/Card";
import { Property } from "../types";

const getProperties = async (): Promise<Property[]> => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("Hygraph endpoint not set in environment")
  }

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "gcms-stage": "PUBLISHED"
    },
    body: JSON.stringify({
      query: `
        query PropertiesMainSearch {
          properties {
            bedrooms
            bathrooms
            hotTub
            inUnitLaundry
            listingPhotos {
              fileName
              url
            }
            location {
              latitude
              longitude
            }
            name
            offStreetParking
            petFriendly
            pool
            pricePerNight
            slug
            id
          }
        }
      `
    })
  })
  const json = await response.json()
  return json.data.properties
}

const Home= async () => {
  const propertiesList = await getProperties()
  
  return (
    <div>
      <NavBar />
      <SearchBar />
      <main>
        <article>
          <Map/>
        </article>
        <article className="listings">
          <h2 className="text-3xl font-bold">Rental Listings</h2>
          <div className="card-container">
            {propertiesList.map((property: Property) => <Card
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
