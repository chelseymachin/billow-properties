import PropertyDetails from "@/components/PropertyDetails";
import Link from "next/link";

interface Params {
    params: Promise<{
      slug: string;
    }>;
  }
  
  const Property = async (props: Params) => {
    const params = await props.params;
    return (
      <div>
        <div>
          <Link href="/">
            ← Back to Listings
          </Link>
        </div>
        <PropertyDetails slug={params.slug} />
      </div>
    )
  };
  
  export default Property;