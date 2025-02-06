import PropertyDetails from "@/app/components/PropertyDetails";
import Link from "next/link";

interface Params {
    params: Promise<{
      slug: string;
    }>;
  }
  
  const Property = async (props: Params) => {
    const params = await props.params;
    return (
      <div className="property-page">
        <div className="back-button-container">
          <Link href="/" className="back-button">
            ← Back to Listings
          </Link>
        </div>
        <PropertyDetails slug={params.slug} />
      </div>
    )
  };
  
  export default Property;