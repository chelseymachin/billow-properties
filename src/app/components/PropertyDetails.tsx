import { getProperty } from "@/app/lib/propertyService";

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
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <p>Price per night: ${property.pricePerNight}</p>
      <p>{property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms</p>
      {property.hotTub && <p>Has a hot tub</p>}
      {property.pool && <p>Has a pool</p>}
      {property.petFriendly && <p>Pet friendly</p>}
    </div>
  );
};

export default PropertyDetails