import PropertyDetails from "@/app/components/PropertyDetails";

interface Params {
    params: {
      slug: string;
    };
  }
  
  const Property = ({ params }: Params) => {
    return <PropertyDetails slug={params.slug} />;
  };
  
  export default Property;