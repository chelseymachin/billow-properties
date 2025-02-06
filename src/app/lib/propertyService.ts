export interface PropertyData {
    bedrooms: number;
    bathrooms: number;
    description: string;
    hotTub: boolean;
    id: string;
    inUnitLaundry: boolean;
    name: string;
    offStreetParking: boolean;
    petFriendly: boolean;
    pool: boolean;
    pricePerNight: number;
    slug: string;
  }
  
  export const getProperty = async (slug: string): Promise<PropertyData | null> => {
    const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
    if (!HYGRAPH_ENDPOINT) {
      throw new Error("Hygraph endpoint not set in environment");
    }
  
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "gcms-stage": "PUBLISHED",
      },
      body: JSON.stringify({
        query: `
          query Property($slug: String!) {
            property(where: { slug: $slug }) {
              bedrooms
              bathrooms
              description
              hotTub
              id
              inUnitLaundry
              name
              offStreetParking
              petFriendly
              pool
              pricePerNight
              slug
            }
          }
        `,
        variables: { slug },
      }),
    });
  
    if (!response.ok) {
      console.error("Failed to fetch property data", await response.text());
      return null;
    }
  
    const data = await response.json();
    return data.data?.property || null;
  };
  