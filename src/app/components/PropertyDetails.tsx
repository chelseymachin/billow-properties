import { getProperty } from "@/app/lib/propertyService";
import PhotoCarousel from "./PhotoCarousel";

interface PropertyDetailsProps {
  slug: string;
}

const PropertyDetails = async ({ slug }: PropertyDetailsProps) => {
  const property = await getProperty(slug);

  if (!property) {
    return <div className="property-page">Property not found.</div>;
  }

  return (
    <div className="property-page">
      <div className="property-container">
        <div className="left-container">

          {/* Image Section */}
          <div className="image-container">
            <PhotoCarousel photos={property.listingPhotos} />
          </div>

          <div className="stats-container">
            <h1>{property.name}</h1>
            <p><strong>Price per night:</strong> ${property.pricePerNight}</p>
            <p><strong>{property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms</strong></p>
          </div>
          <div className="features">
            {property.hotTub && <span className="feature">Hot Tub</span>}
            {property.pool && <span className="feature">Pool</span>}
            {property.petFriendly && <span className="feature">Pet Friendly</span>}
            {property.inUnitLaundry && <span className="feature">In-Unit Laundry</span>}
            {property.offStreetParking && <span className="feature">Off-Street Parking</span>}
          </div>
        </div>
        <div className="property-info">
          <p>{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;