import { getProperty } from "@/app/lib/propertyService";
import PhotoCarousel from "./PhotoCarousel";

interface PropertyDetailsProps {
  slug: string;
}

const PropertyDetails = async ({ slug }: PropertyDetailsProps) => {
  const property = await getProperty(slug);

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div>
      <div>

        {/* Image Section */}
        <div>
          <PhotoCarousel photos={property.listingPhotos} />
        </div>

        <div>
          <h1>{property.name}</h1>
          <p><strong>Price per night:</strong> ${property.pricePerNight}</p>
          <p><strong>{property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms</strong></p>
        </div>
        <div>
          {property.hotTub && <span>Hot Tub</span>}
          {property.pool && <span>Pool</span>}
          {property.petFriendly && <span>Pet Friendly</span>}
          {property.inUnitLaundry && <span>In-Unit Laundry</span>}
          {property.offStreetParking && <span>Off-Street Parking</span>}
        </div>
      </div>
      <div>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;